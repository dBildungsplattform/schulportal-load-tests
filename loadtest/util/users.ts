import { SharedArray } from "k6/data";
import { RollenArt } from "../api-client/generated/index.ts";
import { prettyLog } from "./debug.ts";

const DATAPATH = "../data/users.json";

export type User = {
  username: string;
  password: string;
  role: RollenArt;
};
export type LoginData = Pick<User, "username" | "password">;

// map a role to an absolute number of users
function mapRoleToCount(role: RollenArt): number {
  switch (role) {
    case RollenArt.Lern:
      return 2_000;
    case RollenArt.Lehr:
      return 500;
    case RollenArt.Extern:
      return 0;
    case RollenArt.Orgadmin:
      return 0;
    case RollenArt.Leit:
      return 1000;
    case RollenArt.Sysadmin:
      return 12;
  }
}

export type UserRatio = Record<RollenArt, number>;

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
const groupedUsers = new Map<RollenArt, LoopIterator<User>>();
const users = JSON.parse(open(DATAPATH)) as Array<User>;
for (const [key, role] of Object.entries(RollenArt)) {
  const backingArray = new SharedArray(key, () =>
    users.filter((user: User) => {
      return user.role == role;
    }),
  );
  const iterator = new LoopIterator<User>(backingArray);
  groupedUsers.set(role, iterator);
}

export function getDefaultAdminRatio(): Partial<UserRatio> {
  return {
    SYSADMIN: mapRoleToCount(RollenArt.Sysadmin),
    LEIT: mapRoleToCount(RollenArt.Leit),
  };
}

export function getDefaultAdminMix(maxUsers?: number): UserMix {
  return new UserMix(getDefaultAdminRatio(), maxUsers);
}

export function getDefaultUserMix(maxUsers?: number): UserMix {
  return new UserMix(
    {
      LEHR: mapRoleToCount(RollenArt.Lehr),
      LERN: mapRoleToCount(RollenArt.Lern),
    },
    maxUsers,
  );
}

export class UserMix {
  activeRoles: Array<RollenArt>;
  rolePool: LoopIterator<RollenArt>;
  tracker: Map<RollenArt, number>;
  initialTracker: typeof this.tracker;
  maxUsers?: number;

  constructor(ratio: Partial<UserRatio>, maxUsers?: number) {
    this.activeRoles = [];
    this.tracker = new Map();
    this.initialTracker = new Map();
    for (const role of Object.values(RollenArt) as Array<RollenArt>) {
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

  getCurrentRole(): RollenArt {
    if (this.isExhausted()) this.initializeTracker();
    const [currentRole, currentRoleCount] = this.getCurrentRoleAndCount();
    this.tracker.set(currentRole, currentRoleCount - 1);
    return currentRole;
  }

  getCurrentRoleAndCount(): [RollenArt, number] {
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
