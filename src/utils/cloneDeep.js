import isObject from './isObject'
import getTag from './getTag'

function initCloneArray(array) {
  const { length } = array
  // 使用参数的构造函数构建一个新的数组对象
  const result = new array.constructor(length)

  if (
    length &&
    typeof array[0] === 'string' &&
    hasOwnProperty.call(array, 'index')
  ) {
  }
}

function cloneDeep(value) {
  let result
  if (result !== undefined) {
    return result
  }

  if (!isObject(value)) {
    return result
  }

  const isArr = Array.isArray(value)
  // 获取value类型type  [object Object]  [object Array] [object Object]
  const tag = getTag(value)

  if (isArr) {
    result = initCloneArray(value)
    return copyArray(value, result)
  } else {
  }
}
