export function isObject(val: any) {
  return typeof val === 'object'
}

export function isNotNumber(val: any) {
  return isNaN(Number(val))
}
