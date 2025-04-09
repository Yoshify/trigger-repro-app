'use server';

import { helloWorldTask } from '@/trigger/example';
import { tasks } from '@trigger.dev/sdk/v3';

export const runTask = async () => {
	await tasks.trigger<typeof helloWorldTask>('hello-world', {
		name: 'John Doe',
	});
};
