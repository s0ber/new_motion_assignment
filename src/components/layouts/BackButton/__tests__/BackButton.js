import React from 'react'
import renderer from 'utils/test_helpers/renderer'

import BackButton from '../BackButton'
import Icon from 'icons/Icon'

describe('BackButton', () => {
  let component
  const render = renderer(BackButton)

  it('renders a button with provided title and with icon', () => {
    component = render({title: 'Test Button'})
    expect(component).to.equalJSX(
      <span className='BackButton'>
        <Icon fa='chevron-left' /> Test Button
      </span>
    )
  })
})
