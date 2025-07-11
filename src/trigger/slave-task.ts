import { TriggerTestClass } from "@/lib/trigger-test-class";
import { logger, metadata, task, wait } from "@trigger.dev/sdk/v3";

export const slaveTask = task({
  id: "slave-task",
  // Set an optional maxDuration to prevent tasks from running indefinitely
  maxDuration: 300, // Stop executing after 300 secs (5 mins) of compute
  run: async (payload: any, { ctx }) => {
    const testClass = new TriggerTestClass();
    metadata.root.set('slave.selfSetRoot', true);
    testClass.setAs('self', 'slave.selfViaClass', true);
    testClass.setAs('parent', 'slave.parentViaClass', true);
    testClass.setAs('root', 'slave.rootViaClass', true);
    return { ok: true }
  },
});