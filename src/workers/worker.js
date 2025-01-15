"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jobQueue_1 = require("../queues/jobQueue");
const cacheService_1 = require("../services/cacheService");
const pubSub_1 = require("../pubsub/pubSub");
jobQueue_1.queue.process((job) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = job.data;
    if (cacheService_1.cacheService.isCached(id)) {
        console.log(`Handled from cache ${id}`);
    }
    else {
        console.log(`Handled ${id}`);
        cacheService_1.cacheService.addToCache(id);
        (0, pubSub_1.publishMessage)(`Processed ID: ${id}`);
    }
}));
