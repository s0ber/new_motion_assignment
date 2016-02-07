import currentPageId from 'reducers/currentPageId'

describe('currentPageId reducer', () => {
  let state
  let action

  afterEach(() => {
    state = null
    action = null
  })

  it('returns new page id on CHANGE_PAGE_ID action', () => {
    state = null
    action = {type: 'CHANGE_PAGE_ID', payload: 'my_page_id'}

    expect(currentPageId(state, action)).to.eq('my_page_id')
  })

  it('returns the same state by default', () => {
    state = {my: 'state'}
    action = {type: 'RANDOM_ACTION'}
    expect(currentPageId(state, action)).to.eq(state)
  })
})
