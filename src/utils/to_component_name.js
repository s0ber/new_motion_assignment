import {camelCase, capitalize} from 'lodash/string'

export default function(string) {
  return capitalize(camelCase(string))
}
