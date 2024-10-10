const SPSH_BASE = __ENV["SPSH_BASE"];

export enum CONFIG {
  SPIKE = "spike",
  STRESS = "stress",
  BREAKPOINT = "breakpoint",
  DEBUG = "debug",
}
export function getConfig(): CONFIG {
  const config = __ENV["CONFIG"];
  if (config == CONFIG.SPIKE.toString()) return CONFIG.SPIKE;
  if (config == CONFIG.STRESS.toString()) return CONFIG.STRESS;
  if (config == CONFIG.BREAKPOINT.toString()) return CONFIG.BREAKPOINT;
  if (config == CONFIG.DEBUG.toString()) return CONFIG.DEBUG;
  throw Error(`Invalid value for config '${config}'`);
}

export function getDefaultOptions() {
  const config = getConfig();
  switch (config) {
    case CONFIG.SPIKE:
      return {
        stages: [
          { duration: "30s", target: 100 },
          { duration: "10s", target: 0 },
        ],
      };
    case CONFIG.STRESS:
      return {
        stages: [
          { duration: "1m", target: 100 },
          // { duration: "5m", target: 100 },
          { duration: "1m", target: 0 },
        ],
      };
    case CONFIG.BREAKPOINT:
      return {
        stages: [{ duration: "5m", target: 100 }],
        thresholds: {
          http_req_failed: [{ threshold: "rate<0.10", abortOnFail: true }],
          http_req_duration: [{ threshold: "p(95)<2000", abortOnFail: true }],
        },
      };
    case CONFIG.DEBUG:
      return {
        stages: [{ duration: "1s", target: 1 }],
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
