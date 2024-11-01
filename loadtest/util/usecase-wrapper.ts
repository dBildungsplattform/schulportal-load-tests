import { sleep } from "k6";
import { Counter, Trend } from "k6/metrics";

const completedCounter = new Counter("usecases_completed");
const abortedCounter = new Counter("usecases_aborted");

const completedDuration = new Trend("usecases_completed_duration", true);
const abortedDuration = new Trend("usecases_aborted_duration", true);

export function wrapTestFunction(testFunction: () => void): () => void {
  return () => {
    const start = Date.now();
    try {
      testFunction();
      completedCounter.add(1);
      completedDuration.add(Date.now() - start);
    } catch (error: unknown) {
      abortedCounter.add(1, { name: getErrorName(error as Error) });
      abortedDuration.add(Date.now() - start);
    } finally {
      sleep(1);
    }
  };
}

function getErrorName(error: Error): string {
  let name = "unknown error";
  if (error.name) name = `${error.name}`;
  else if (error.message) name = `${error.message}`;
  return name;
}
