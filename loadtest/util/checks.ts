import { RefinedResponse, ResponseType } from "k6/http";

export function getStatusChecker(expectedStatus: Array<number> | number) {
  if (Array.isArray(expectedStatus))
    return (r: RefinedResponse<ResponseType | undefined>) =>
      expectedStatus.includes(r.status);
  else
    return (r: RefinedResponse<ResponseType | undefined>) =>
      r.status === expectedStatus;
}

export function getTimeChecker(maxTime: number) {
  return (r: RefinedResponse<ResponseType | undefined>) =>
    r.timings.duration < maxTime;
}

export const defaultTimingCheck = {
  "took <1000ms": getTimeChecker(1000),
};

export const defaultHttpCheck = {
  "got expected status": getStatusChecker(200),
  ...defaultTimingCheck,
};
