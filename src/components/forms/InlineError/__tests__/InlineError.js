import React from 'react'
import * as TestUtils from 'react-shallow-testutils'
import renderer from 'utils/test_helpers/renderer'

import InlineError from '../InlineError'

describe('InlineError', () => {
  const render = renderer(InlineError)

  it('renders error message', () => {
    const component = render({text: 'test error message'})

    expect(component).to.equalJSX(
      <span className='InlineError'> — test error message</span>
    )
  })
})
