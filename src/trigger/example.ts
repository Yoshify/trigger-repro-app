import { TriggerTestClass } from "@/lib/trigger-test-class";
import { logger, metadata, task, wait } from "@trigger.dev/sdk/v3";

export const helloWorldTask = task({
  id: "hello-world",
  // Set an optional maxDuration to prevent tasks from running indefinitely
  maxDuration: 300, // Stop executing after 300 secs (5 mins) of compute
  run: async (payload: any, { ctx }) => {
    metadata.set('metadata-in-root', true);
    const testClass = new TriggerTestClass();
    // should set testAsync: true in metadata
    await testClass.testAsync();
    // should set testSync: true in metadata
    testClass.testSync();
    // should set testByPassingMetadata: true in metadata
    testClass.testByPassingMetadata(metadata);
    // should set testWithCallback: true in metadata
    testClass.testWithCallback((key, value) => {
      metadata.set(key, value);
    });

    logger.log("Hello, world!", { payload, ctx });

    await wait.for({ seconds: 5 });

    return {
      message: "Hello, world!",
    }
  },
});