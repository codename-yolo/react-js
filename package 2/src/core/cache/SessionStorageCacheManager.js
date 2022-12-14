import CacheManager from './CacheManager'

class SessionStorageCacheManager extends CacheManager {
  constructor() {
    super()

    //make this sealed
    if (new.target !== SessionStorageCacheManager) {
      throw new TypeError('This is a sealed class. Subclassing is not allowed.')
    }
  }
}

const sessionStorageCacheManager = new SessionStorageCacheManager()
export default sessionStorageCacheManager
