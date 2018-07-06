// 使用常量代替mutation事件类型
// 使用常量代替mutation事件类型在各种flux实现中是很常见的模式，这样可以使linter之类的工具发挥作用， 并且把这些常量放在单独的文件里可以清晰的看出整个APP包含的mutation
export const SWITCH_DIALOG = 'SWITCH_DIALOG'
export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const DELETE = 'DELETE'
export const SETLISTCALUE = 'SETLISTCALUE'
