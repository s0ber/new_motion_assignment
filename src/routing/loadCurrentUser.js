import fetchCurrentUser from 'actions/currentUser/fetchCurrentUser'
import setCurrentUser from 'actions/currentUser/setCurrentUser'

export default function(state, dispatch) {
  return new Promise((resolve, reject) => {
    if (state.currentUser) {
      resolve()
    } else {
      dispatch(fetchCurrentUser()).then((currentUser) => {
        dispatch(setCurrentUser(currentUser))
        resolve()
      })
    }
  })
}

