import { metadata } from "@trigger.dev/sdk/v3";

export class TriggerTestClass {
  setAs(as: 'self' | 'parent' | 'root', key: string, value: boolean) {
    if(as === 'self') {
      metadata.set(key, value);
    } else if(as === 'parent') {
      metadata.parent.set(key, value);
    } else if(as === 'root') {
      metadata.root.set(key, value);
    }
  }
}
