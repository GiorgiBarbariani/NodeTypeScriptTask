import Bull from 'bull';

export const queue = new Bull('jobQueue', {
  redis: { host: 'redis', port: 6379 }
});
