export default function(state, id) {
  const index = state.findIndex((item) => item.id == id)
  return {item: state[index], index}
}
