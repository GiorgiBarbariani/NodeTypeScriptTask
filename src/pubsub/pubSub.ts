import Redis from 'ioredis';

const publisher = new Redis({ host: 'redis', port: 6379 });
const subscriber = new Redis({ host: 'redis', port: 6379 });

export const startPubSub = () => {
  subscriber.subscribe('jobChannel', () => {
    console.log('Subscribed to jobChannel');
  });

  subscriber.on('message', (channel, message) => {
    console.log(`Received message: ${message} on channel: ${channel}`);
  });
};

export const publishMessage = (message: string) => {
  publisher.publish('jobChannel', message);
};
