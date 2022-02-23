import seedrandom from 'seedrandom'
import DATA from '../data/idioms.json'
import { getHint } from '../logic'
import { answers } from './list'
import { RANDOM_SEED } from '~/logic'

const DATA_SET = DATA.length
var count = 0

export function getAnswerOfDay(day: number) {
  let [word = '', hint = ''] = []
  if (!word) {
    word = DATA[Math.floor(Math.random() * DATA_SET - 1)][0]
  }
  if (!hint)
    hint = getHint(word)
  return {
    word,
    hint,
  }
}
