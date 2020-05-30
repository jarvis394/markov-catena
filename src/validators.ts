export const defaultValidator = (_: string) => true

export const wordsCount = (min: number = 0, max: number = Infinity) => {
  return (s: string) => {
    const l = s.split(' ').length
    return min <= l && l <= max
  }
}

export const charsCount = (min: number = 0, max: number = Infinity) => {
  return (s: string) => {
    const l = s.length
    return min <= l && l <= max
  }
}
