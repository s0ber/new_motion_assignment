import findItemById from './findItemById'

export default function(state, id) {
  const {index} = findItemById(state, id)

  if (index !== -1) {
    return [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ]
  } else {
    return state
  }
}

