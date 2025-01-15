class CacheService {
  private cache = new Map<string, NodeJS.Timeout>();

  addToCache(id: string) {
    this.cache.set(
      id,
      setTimeout(() => this.cache.delete(id), 3 * 60 * 1000)
    );
  }

  isCached(id: string): boolean {
    return this.cache.has(id);
  }
}

export const cacheService = new CacheService();
