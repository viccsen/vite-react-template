/*
 * @Author: Viccsen
 * @Date: 2023-09-07 14:35:11
 * @LastEditTime: 2023-11-07 18:05:12
 * @LastEditors: Viccsen
 * @Description:
 */
const Global: any = typeof window !== 'undefined' ? window : global

/**
 * 数据缓存类
 */
export default class Storage {
  private readonly __storage: any
  private readonly __appKey: string
  /**
   * 数据缓存类构造方法
   * @param appKey 用于存储数据时键名的前缀
   * @param storage 本地存储或会话存储
   */
  constructor(appKey: string, storage?: any) {
    this.__storage = storage || Global.localStorage
    this.__appKey = appKey ? appKey + '-' : ''
    // this.clear(true); //清除已经过期的数据
  }

  /**
   * 存储数据
   * @param key   键名
   * @param v     键值
   * @param expire  有效期， ms 单位
   * @param merge 新旧数据是否合并
   */
  setItem(key: string, v: any, expire?: number, merge?: boolean) {
    const { __storage, __appKey } = this
    const str: any = merge
      ? { v: { ...{ v: this.getItem(key) }, ...{ v } } }
      : { v: { v } }
    if (expire) {
      str.t = Date.now() + expire
      setTimeout(() => {
        this.removeItem(key)
      }, expire)
    }
    __storage.setItem(__appKey + key.toString(), JSON.stringify(str))
  }

  /**
   * 获取数据
   * @param key   键名
   * @returns     返回键值， 如果过期则为空
   */
  getItem(key: string) {
    const { __storage, __appKey } = this
    const k = __appKey + key.toString()
    const obj = JSON.parse(__storage.getItem(k))
    if (obj && obj.t && obj.t < Date.now()) {
      __storage.removeItem(k)
      return null
    }
    return obj && obj.v && obj.v.v
  }

  /**
   * 删除存储的数据
   * @param key
   */
  removeItem(key: string) {
    const { __storage, __appKey } = this
    const k = __appKey + key.toString()
    __storage.removeItem(k)
  }

  /**
   * 删除一组数据
   * @param keyPrefix
   */
  removeItems(keyPrefix: string) {
    const { __storage, __appKey } = this
    const key = __appKey + keyPrefix.toString()
    Object.keys(__storage).forEach(
      (k) => k.indexOf(key) === 0 && __storage.removeItem(k),
    )
  }

  /**
   * 清空数据
   */
  clear(expire?: number) {
    const { __storage, __appKey } = this
    if (expire) {
      Object.keys(__storage).forEach(
        (k) => k.indexOf(__appKey) === 0 && __storage.getItem(k),
      )
    } else {
      Object.keys(__storage).forEach(
        (k) => k.indexOf(__appKey) === 0 && __storage.removeItem(k),
      )
    }
  }
}
