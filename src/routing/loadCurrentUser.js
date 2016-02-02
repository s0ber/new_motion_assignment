import getCurrentUser from './requests/getCurrentUser'
import setCurrentUser from 'actions/currentUser/setCurrentUser'

export default function(state, dispatch) {
  return new Promise((resolve, reject) => {
    if (state.currentUser) {
      resolve()
    } else {
      getCurrentUser().then((currentUser) => {
        dispatch(setCurrentUser(currentUser))
        resolve()
      })
    }
  })
}

