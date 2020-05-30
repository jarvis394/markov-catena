import { random, objectValues } from './utils'
import { Chance } from 'chance'
import * as constants from './constants'

type Frames = Record<string, Record<string, number>>

export class MarkovModel {
  frames: Frames = {}

  constructor(samples: string[]) {
    for (const sample of samples) {
      const words = [
        constants.START,
        ...sample.toLowerCase().split(' '),
        constants.END,
      ]

      for (let i = 0; i < words.length - 1; i++) {
        const currentFrame = words[i]
        const nextWord = words[i + 1]

        if (!this.frames[currentFrame]) this.frames[currentFrame] = {}

        if (this.frames[currentFrame][nextWord]) this.frames[currentFrame][nextWord] += 1
        else this.frames[currentFrame][nextWord] = 1
      }
    }
  }

  getAvailableWords(frame: string) {
    try {
      return this.frames[frame]
    } catch (e) {
      throw new Error(`Frame ${frame} does not exist in the model`)
    }
  }

  getRandomAvailableWord(frame: string) {
    try {
      return new Chance().weighted(
        Object.keys(this.frames[frame]),
        objectValues(this.frames[frame])
      )
    } catch (e) {
      throw new Error(`Frame ${frame} does not exist in the model`)
    }
  }

  getFullFrame(beginning: string): string {
    let possible = []

    for (const frame of Object.keys(this.frames)) {
      if (frame.startsWith(beginning)) possible.push(frame)
    }

    return possible[random(0, possible.length - 1)]
  }
}
