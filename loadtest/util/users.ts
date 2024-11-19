import { SharedArray } from "k6/data";

const DATAPATH = "../data/users.json";

export type User = {
  username: string;
  password: string;
  role: ROLE;
};
export enum ROLE {
  LERN = "LERN",
  LEHR = "LEHR",
  EXTERN = "EXTERN",
  ORGADMIN = "ORGADMIN",
  LEIT = "LEIT",
  SYSADMIN = "SYSADMIN",
}
export type LoginData = Pick<User, "username" | "password">;

// map a role to an absolute number of users
function mapRoleToCount(role: ROLE): number {
  switch (role) {
    case ROLE.LERN:
      return 2_000;
    case ROLE.LEHR:
      return 500;
    case ROLE.EXTERN:
      return 0;
    case ROLE.ORGADMIN:
      return 0;
    case ROLE.LEIT:
      return 1000;
    case ROLE.SYSADMIN:
      return 12;
  }
}

type UserRatio = Record<keyof typeof ROLE, number>;

class LoopIterator<T> {
  readPosition = 0;
  constructor(public backingArray: Array<T>) {}
  next(): T {
    this.readPosition = ++this.readPosition % this.backingArray.length;
    return this.backingArray[this.readPosition];
  }
}

/**
 * Map of roles to looping iterators of usernames and passwords from users.json
 */
const groupedUsers = new Map<ROLE, LoopIterator<User>>();
const users = JSON.parse(open(DATAPATH)) as Array<User>;
for (const [key, role] of Object.entries(ROLE)) {
  const backingArray = new SharedArray(key, () =>
    users.filter((user: User) => user.role == role),
  );
  const iterator = new LoopIterator<User>(backingArray);
  groupedUsers.set(role, iterator);
}

export function getDefaultAdminMix(maxUsers?: number): UserMix {
  return new UserMix(
    {
      SYSADMIN: mapRoleToCount(ROLE.SYSADMIN),
      LEIT: mapRoleToCount(ROLE.LEIT),
    },
    maxUsers,
  );
}

export function getDefaultUserMix(maxUsers?: number): UserMix {
  return new UserMix(
    {
      LEHR: mapRoleToCount(ROLE.LEHR),
      LERN: mapRoleToCount(ROLE.LERN),
    },
    maxUsers,
  );
}

export class UserMix {
  activeRoles: Array<ROLE>;
  rolePool: LoopIterator<ROLE>;
  tracker: Map<ROLE, number>;
  initialTracker: typeof this.tracker;
  maxUsers?: number;

  constructor(ratio: Partial<UserRatio>, maxUsers?: number) {
    this.activeRoles = [];
    this.tracker = new Map();
    this.initialTracker = new Map();
    for (const role of Object.values(ROLE)) {
      if (ratio[role]) {
        this.activeRoles.push(role);
        this.initialTracker.set(role, ratio[role]);
      }
    }
    this.initializeTracker();
    this.maxUsers = maxUsers;
    this.rolePool = new LoopIterator(this.activeRoles);
  }

  getLogin(): LoginData {
    const user = this.getUser();
    return {
      username: user.username,
      password: user.password,
    };
  }

  getUser(): User {
    const currentRole = this.getCurrentRole();
    const user = groupedUsers.get(currentRole)?.next();
    if (!user)
      throw new Error(
        `user with requested role ${currentRole} is not present in ${DATAPATH}`,
      );
    return user;
  }

  getCurrentRole(): ROLE {
    if (this.isExhausted()) this.initializeTracker();
    const [currentRole, currentRoleCount] = this.getCurrentRoleAndCount();
    this.tracker.set(currentRole, currentRoleCount - 1);
    return currentRole;
  }

  getCurrentRoleAndCount(): [ROLE, number] {
    const role = this.rolePool.next();
    const count = this.tracker.get(role)!;
    return [role, count];
  }

  isExhausted(): boolean {
    for (const count of this.tracker.values()) if (count > 0) return false;
    return true;
  }

  initializeTracker(): void {
    for (const [key, value] of this.initialTracker) {
      this.tracker.set(key, value);
    }
  }
}
