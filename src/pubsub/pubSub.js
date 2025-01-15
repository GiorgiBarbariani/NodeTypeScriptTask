"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishMessage = exports.startPubSub = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const publisher = new ioredis_1.default({ host: 'redis', port: 6379 });
const subscriber = new ioredis_1.default({ host: 'redis', port: 6379 });
const startPubSub = () => {
    subscriber.subscribe('jobChannel', () => {
        console.log('Subscribed to jobChannel');
    });
    subscriber.on('message', (channel, message) => {
        console.log(`Received message: ${message} on channel: ${channel}`);
    });
};
exports.startPubSub = startPubSub;
const publishMessage = (message) => {
    publisher.publish('jobChannel', message);
};
exports.publishMessage = publishMessage;
