'use server';

import { masterTask } from '@/trigger/master-task';
import { tasks } from '@trigger.dev/sdk/v3';

export const runTask = async () => {
	await tasks.trigger<typeof masterTask>('master-task', {});
};
