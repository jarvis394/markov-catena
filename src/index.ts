import * as validators from './validators'
import * as formatters from './formatters'
import * as core from './core'
import * as constants from './constants'

export * as validators from './validators'
export * as formatters from './formatters'
export * as core from './core'
export * as constants from './constants'

export class StringGenerator {
  samples: string[]
  model: core.MarkovModel

  constructor(samples: string[]) {
    if (!samples || samples.length < 1) throw new Error('Samples can\'t be an empty array')

    this.samples = samples
    this.model = new core.MarkovModel(samples)
  }

  generateString({
    attempts = 25,
    validator = validators.defaultValidator,
    formatter = formatters.defaultFormatter
  }) {
    for (let i = 0; i < attempts; i++) {
      let currentFrame = this.model.getFullFrame(constants.START)
      let result = [currentFrame]
      result.push(this.model.getRandomAvailableWord(currentFrame))

      while (!result.some(e => e === constants.END)) {
        const len = result.length
        currentFrame = this.model.getFullFrame(
          result.slice(len - 1, len)[0]
        )
        result.push(this.model.getRandomAvailableWord(currentFrame))
      }

      result.splice(result.indexOf(constants.START), 1)
      result.splice(result.indexOf(constants.END), 1)

      let resultString = result.join(' ')

      if (validator(resultString)) return formatter(resultString)
    }

    return null
  }
}
