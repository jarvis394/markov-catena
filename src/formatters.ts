export const defaultFormatter = (s: string) => s

export const usualSyntax = (result: string): string => {
  let formattedResult = ''

  for (let i = 0; i < result.length; i++) {
    if (i === 0) {
      formattedResult += result[i].toUpperCase()
    } else if (i > 1) {
      if (result[i - 1] === ' ' && ['.', '?', '!'].find((e) => e === result[i - 2])) {
        formattedResult += result[i].toUpperCase()
      } else {
        formattedResult += result[i]
      }
    } else {
      formattedResult += result[i]
    }
  }

  if (!['.', '?', '!'].find((e) => e === formattedResult[-1])) {
    formattedResult += '.'
  }

  return formattedResult
}
