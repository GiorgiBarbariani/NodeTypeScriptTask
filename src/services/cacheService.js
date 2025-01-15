"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheService = void 0;
class CacheService {
    constructor() {
        this.cache = new Map();
    }
    addToCache(id) {
        this.cache.set(id, setTimeout(() => this.cache.delete(id), 3 * 60 * 1000));
    }
    isCached(id) {
        return this.cache.has(id);
    }
}
exports.cacheService = new CacheService();
