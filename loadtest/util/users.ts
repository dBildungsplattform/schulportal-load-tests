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

type UserRatio = Record<keyof typeof ROLE, number>;

/**
 * Array of usernames and passwords from users.json
 */
const users = new SharedArray("users", () => {
  const f = JSON.parse(open(DATAPATH)) as Array<User>;
  return f;
});

export function getDefaultAdminMix(): UserMix {
  return new UserMix({
    SYSADMIN: 3,
    LEIT: 250,
  });
}

export function getDefaultUserMix(): UserMix {
  return new UserMix({
    SYSADMIN: 3,
    LEIT: 250,
    LEHR: 1000,
    LERN: 24000,
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

  getLogin(): Pick<User, "username" | "password"> {
    const user = this.getUser();
    return {
      username: user.username,
      password: user.password,
    };
  }

  getUser(): User {
    const currentRole = this.getCurrentRole();
    const user = users.find((user) => user.role == currentRole);
    if (!user)
      throw new Error(
        `user with requested role ${currentRole} is not present in ${DATAPATH}`,
      );
    return user;
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
    if (!currentRoleCount) this.initializeTracker();
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
}
