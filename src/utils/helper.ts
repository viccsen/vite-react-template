/*
 * @Author: Viccsen
 * @Date: 2023-08-16 17:43:27
 * @LastEditTime: 2023-11-07 18:00:11
 * @LastEditors: Viccsen
 * @Description:
 */
export const removeUndefinedProps = (obj: any) => {
  if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === undefined) {
        try {
          delete obj[key]
        } catch {
          console.warn(`props ${key} from ${obj} is unable to remove`)
        } //有可能此属性是不可删除的
      } else {
        removeUndefinedProps(obj[key])
      }
    })
  }
}
