import { queue } from '../queues/jobQueue';
import { cacheService } from '../services/cacheService';
import { publishMessage } from '../pubsub/pubSub';

queue.process(async (job) => {
  const { id } = job.data;

  if (cacheService.isCached(id)) {
    console.log(`Handled from cache ${id}`);
  } else {
    console.log(`Handled ${id}`);
    cacheService.addToCache(id);
    publishMessage(`Processed ID: ${id}`);
  }
});
