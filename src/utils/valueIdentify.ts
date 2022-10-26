export function isObject(val: unknown) {
  return typeof val === 'object'
}

export function isNotNumber(val: unknown) {
  return isNaN(Number(val))
}
