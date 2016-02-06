import map from 'reducers/map'
import {ANONYMOUS} from 'constants'

describe('map reducer', () => {
  let state
  let action

  afterEach(() => {
    state = null
    action = null
  })

  it('updates state lat and lng properties on SET_DEFAULT_LAT_LNG', () => {
    state = {zoom: 12}
    action = {type: 'SET_DEFAULT_LAT_LNG', payload: {lat: 10, lng: 20}}
    expect(map(state, action)).to.eql({zoom: 12, lat: 10, lng: 20})
    expect(map(state, action)).not.to.eq(state)
  })

  it('updates map properties on UPDATE_MAP', () => {
    state = {zoom: 12, lat: 10, lng: 10}
    action = {type: 'UPDATE_MAP', payload: {zoom: 5, lng: 15}}

    expect(map(state, action)).to.eql({zoom: 5, lat: 10, lng: 15})
    expect(map(state, action)).not.to.eq(state)
  })

  it('updates chargers property on SET_CHARGERS', () => {
    state = {zoom: 12, lat: 10, lng: 10}
    action = {type: 'SET_CHARGERS', payload: ['charger1', 'charger2']}

    expect(map(state, action)).to.eql({zoom: 12, lat: 10, lng: 10, chargers: ['charger1', 'charger2']})
    expect(map(state, action)).not.to.eq(state)
  })

  it('returns default state on other actions', () => {
    state = {my: 'state'}
    action = {type: 'RANDOM_ACTION'}
    expect(map(state, action)).to.eq(state)
  })
})
