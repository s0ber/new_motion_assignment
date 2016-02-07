import * as rootReducers from 'reducers/index'

import currentPageId from 'reducers/currentPageId'
import currentUser from 'reducers/currentUser'
import map from 'reducers/map'

describe('root reducers', () => {
  it('returns an object with top level reducers as values, and their names as keys', () => {
    expect(rootReducers).to.eql({
      currentPageId,
      currentUser,
      map
    })
  })
})
