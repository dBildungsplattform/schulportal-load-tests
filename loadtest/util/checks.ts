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
  "took <250ms": getTimeChecker(250),
  "took <500ms": getTimeChecker(500),
  "took <1000ms": getTimeChecker(1000),
  "took <2000ms": getTimeChecker(2000),
  "took <5000ms": getTimeChecker(5000),
};

export const defaultHttpCheck = {
  "got expected status": getStatusChecker(200),
  ...defaultTimingCheck,
};
