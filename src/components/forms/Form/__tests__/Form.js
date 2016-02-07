import React from 'react'
import {Simulate} from 'react-addons-test-utils'
import renderer from 'utils/test_helpers/renderer'
import domRenderer from 'utils/test_helpers/domRenderer'

import Form from '../Form'

describe('Form', () => {
  let component
  let render

  describe('rendering', () => {
    beforeEach(() => {
      render = renderer(Form)
    })

    it('renders a form', () => {
      const handleSubmit = sinon.spy()
      const component = render({onSubmit: handleSubmit})

      expect(component).to.includeJSX(
        <form className='Form' onSubmit={handleSubmit}></form>
      )
    })
  })

  describe('events handling', () => {
    beforeEach(() => {
      render = domRenderer(Form)
    })

    it('handles clicks with props.onSubmit', () => {
      const handleSubmit = sinon.spy()
      const component = render({onSubmit: handleSubmit})

      Simulate.submit(component.node)
      expect(handleSubmit).to.be.calledOnce
    })
  })
})
