import React from 'react'
import renderer from 'utils/test_helpers/renderer'

import Label from 'forms/Label'
import InlineError from 'forms/InlineError'

describe('Label', () => {
  let component
  const render = renderer(Label)

  context('label text is provided', () => {
    it('renders a label', () => {
      component = render({label: 'Label text'})
      expect(component).to.equalJSX(
        <label className='Label'>
          <span className='Label-inner'>Label text</span>
        </label>
      )
    })
  })

  context('field is required', () => {
    it('renders a label with is-required class and * sign', () => {
      component = render({label: 'Label text', required: true})
      expect(component).to.equalJSX(
        <label className='Label is-required'>
          <span className='Label-inner'><abbr title='require'>*</abbr> Label text</span>
        </label>
      )
    })
  })

  context('error is provided', () => {
    it('renders a label with inline error', () => {
      component = render({label: 'Label text', required: true, touched: true, error: 'this field is required'})
      expect(component).to.equalJSX(
        <label className='Label is-required'>
          <span className='Label-inner'><abbr title='require'>*</abbr> Label text</span>
          <InlineError text='this field is required' />
        </label>
      )
    })
  })

  context('children provided', () => {
    it('renders label with child components', () => {
      component = render({label: 'Label text', children: <span />})

      expect(component).to.equalJSX(
        <label className='Label'>
          <span />
          <span className='Label-inner'>Label text</span>
        </label>
      )
    })
  })
})
