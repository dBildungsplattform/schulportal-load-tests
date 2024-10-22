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
      return 24_000;
    case ROLE.LEHR:
      return 6_000;
    case ROLE.EXTERN:
      return 0;
    case ROLE.ORGADMIN:
      return 0;
    case ROLE.LEIT:
      return 300;
    case ROLE.SYSADMIN:
      return 4;
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

export function getDefaultAdminMix(): UserMix {
  return new UserMix({
    SYSADMIN: 3,
    LEIT: 250,
  });
}

export function getDefaultUserMix(): UserMix {
  return new UserMix({
    SYSADMIN: 12 / 4,
    LEIT: 1000 / 4,
    LEHR: 6000 / 4,
    LERN: 24000 / 4,
  });
}

export class UserMix {
  rolePool: Array<ROLE>;
  currentRoleIndex: number;
  tracker: Map<ROLE, number>;
  initialTracker: typeof this.tracker;

  constructor(ratio: Partial<UserRatio>) {
    this.currentRoleIndex = 0;
    this.rolePool = [];
    this.tracker = new Map();
    this.initialTracker = new Map();
    for (const role of Object.values(ROLE)) {
      if (ratio[role]) {
        this.rolePool.push(role);
        this.initialTracker.set(role, ratio[role]);
      }
    }
    this.initializeTracker();
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
    const user = groupedUsers.get(currentRole);
    if (!user)
      throw new Error(
        `user with requested role ${currentRole} is not present in ${DATAPATH}`,
      );
    return user.next();
  }

  getCurrentRole(): ROLE {
    let [currentRole, currentRoleCount] = this.getCurrentRoleAndCount();
    for (
      let safety = this.rolePool.length - 1;
      !currentRoleCount && safety;
      safety--
    ) {
      this.currentRoleIndex =
        (this.currentRoleIndex + 1) % this.rolePool.length;
      [currentRole, currentRoleCount] = this.getCurrentRoleAndCount();
    }
    if (currentRoleCount <= 0) this.initializeTracker();
    [currentRole, currentRoleCount] = this.getCurrentRoleAndCount();
    this.tracker.set(currentRole, currentRoleCount - 1);
    return currentRole;
  }

  getCurrentRoleAndCount(): [ROLE, number] {
    const role = this.rolePool[this.currentRoleIndex];
    const count = this.tracker.get(role)!;
    return [role, count];
  }

  initializeTracker(): void {
    for (const [key, value] of this.initialTracker) {
      this.tracker.set(key, value);
    }
  }

  getTotalUserNumber() {
    return this.rolePool.reduce((total, role) => {
      return total + mapRoleToCount(role);
    }, 0);
  }
}
