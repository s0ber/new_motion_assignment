import currentUser from 'reducers/currentUser'
import {ANONYMOUS} from 'constants'

describe('currentUser reducer', () => {
  let state
  let action

  afterEach(() => {
    state = null
    action = null
  })

  it('returns provided user on SET_CURRENT_USER action', () => {
    const testUser = {id: 1, name: 'Test User'}
    action = {type: 'SET_CURRENT_USER', payload: testUser}
    expect(currentUser(state, action)).to.eq(testUser)
  })

  it('returns Anonymous user on LOGOUT_USER action', () => {
    action = {type: 'LOGOUT_USER'}
    expect(currentUser(state, action)).to.eq(ANONYMOUS)
  })

  it('returns default state on other actions', () => {
    state = {my: 'state'}
    action = {type: 'RANDOM_ACTION'}
    expect(currentUser(state, action)).to.eq(state)
  })
})
