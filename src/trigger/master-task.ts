import { TriggerTestClass } from "@/lib/trigger-test-class";
import { slaveTask } from "@/trigger/slave-task";
import { logger, metadata, task, wait } from "@trigger.dev/sdk/v3";

export const masterTask = task({
  id: "master-task",
  // Set an optional maxDuration to prevent tasks from running indefinitely
  maxDuration: 300, // Stop executing after 300 secs (5 mins) of compute
  run: async (payload: any, { ctx }) => {
    const testClass = new TriggerTestClass();
    metadata.root.set('master.selfSetRoot', true);
    testClass.setAs('self', 'master.selfViaClass', true);
    testClass.setAs('parent', 'master.parentViaClass', true);
    testClass.setAs('root', 'master.rootViaClass', true);

    await slaveTask.triggerAndWait({});

    return {
      ok: true
    }
  },
});