import {Simulate} from 'react-addons-test-utils'
import * as TestUtils from 'react-shallow-testutils'
import renderer from 'utils/tests/renderer'
import domRenderer from 'utils/tests/domRenderer'

import Form from '../Form'

describe('Form', () => {
  let component
  let render

  describe('rendering', () => {
    before(() => {
      render = renderer(Form)
    })

    it('renders form tag', () => {
      component = render({onSubmit: sinon.spy()})
      expect(TestUtils.findWithType(component, 'form').type).to.eq('form')
    })
  })

  describe('events handling', () => {
    before(() => {
      render = domRenderer(Form)
    })

    it('handles submit with props.onSubmit function', () => {
      const handleSubmit = sinon.spy()
      component = render({onSubmit: handleSubmit})

      Simulate.submit(component.node)
      expect(handleSubmit).to.be.calledOnce
    })
  })
})
