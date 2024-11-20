const SPSH_BASE = __ENV["SPSH_BASE"];
export const MAX_VUS = Number.parseInt(__ENV["MAX_VUS"]);

export enum CONFIG {
  SPIKE = "spike",
  STRESS = "stress",
  BREAKPOINT = "breakpoint",
  SOAK = "soak",
  DEBUG = "debug",
}
export function getConfig(): CONFIG {
  const config = __ENV["CONFIG"];
  if (config == CONFIG.SPIKE.toString()) return CONFIG.SPIKE;
  if (config == CONFIG.STRESS.toString()) return CONFIG.STRESS;
  if (config == CONFIG.BREAKPOINT.toString()) return CONFIG.BREAKPOINT;
  if (config == CONFIG.SOAK.toString()) return CONFIG.SOAK;
  if (config == CONFIG.DEBUG.toString()) return CONFIG.DEBUG;
  throw Error(`Invalid value for config '${config}'`);
}

export function getDefaultOptions() {
  const config = getConfig();
  const maxVUs = MAX_VUS ?? 10;
  switch (config) {
    case CONFIG.SPIKE:
      return {
        stages: [
          { duration: "30s", target: maxVUs }, // ramp up
          { duration: "30s", target: maxVUs }, // hold
          { duration: "10s", target: 0 }, // ramp down
        ],
      };
    case CONFIG.STRESS:
      return {
        stages: [
          { duration: "1m", target: Math.round(maxVUs * 0.5) }, // ramp up 1
          { duration: "1m", target: Math.round(maxVUs * 0.8) }, // ramp up 2
          { duration: "1m", target: maxVUs }, // ramp up 3
          { duration: "30s", target: maxVUs }, // hold
          { duration: "1m", target: Math.round(maxVUs * 0.8) }, // ramp down 1
          { duration: "1m", target: Math.round(maxVUs * 0.5) }, // ramp down 2
          { duration: "1m", target: 0 }, // ramp down 3
        ],
      };
    case CONFIG.BREAKPOINT:
      return {
        stages: [{ duration: "10m", target: 10 * maxVUs }],
        thresholds: {
          http_req_failed: [{ threshold: "rate<0.10", abortOnFail: true }],
          http_req_duration: [{ threshold: "p(95)<5000", abortOnFail: true }],
        },
      };
    case CONFIG.SOAK:
      return {
        stages: [
          { duration: "1m", target: maxVUs },
          { duration: "10m", target: maxVUs }
        ]
      };
    case CONFIG.DEBUG:
      return {
        stages: [{ duration: "1s", target: maxVUs }],
      };
  }
}

export function getFrontendUrl() {
  if (SPSH_BASE.includes("localhost")) return "https://localhost:8099/";
  if (!SPSH_BASE.endsWith("/")) return `${SPSH_BASE}/`;
  return SPSH_BASE;
}

export function getBackendUrl() {
  if (SPSH_BASE.includes("localhost")) return "http://localhost:9090/api/";
  if (!SPSH_BASE.endsWith("/")) return `${SPSH_BASE}/api/`;
  return `${SPSH_BASE}api/`;
}
