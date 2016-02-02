import findItemById from './findItemById'
const PROTECTED_ATTRIBUTES = {password: null, password_confirmation: null}

export default function(state, item, attributes) {
  const itemData = findItemById(state, item.id)
  const index = itemData.index

  if (index !== -1) {
    item = Object.assign({}, itemData.item, item, attributes, PROTECTED_ATTRIBUTES)

    return [
      ...state.slice(0, index),
      item,
      ...state.slice(index + 1)
    ]
  } else {
    return state
  }
}
