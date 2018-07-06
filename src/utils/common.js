// const声明常量  一旦声明就不能再改变
export const name = 'xiaomei'

export const isRealName = (code) => {
  var REG = /^[\u4e00-\u9fa5]{2-20}$/g
  if (REG.test(code)) return false
  else return true
}

export const flatArray = (arr) => {
  const flattened = [].concat(...arr)
  return flattened.some(item => Array.isArray(item)) ? flatArray(flattened) : flattened
}
