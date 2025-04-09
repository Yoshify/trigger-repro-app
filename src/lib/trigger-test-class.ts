import { metadata } from "@trigger.dev/sdk/v3";

export class TriggerTestClass {
  async testAsync() {
    metadata.root.set('testAsync', true);
  }

  testSync() {
    metadata.root.set('testSync', true);
  }

  testByPassingMetadata(passedMetadata: typeof metadata) {
    passedMetadata.root.set('testByPassingMetadata', true);
  }

  testWithCallback(callback: (key: string, value: boolean) => void) {
    callback('testWithCallback', true);
  }
}
