import * as TestUtils from 'react-shallow-testutils'
import renderer from 'utils/tests/renderer'

import Form from '../Form'

describe('Form', () => {
  let component
  const render = renderer(Form)

  describe('rendering', () => {
    it('renders form tag', () => {
      component = render({onSubmit: sinon.spy()})
      expect(TestUtils.findWithType(component, 'form')).not.to.be.null
    })
  })

  describe('events handling', () => {
    it('handles submit with props.onSubmit function', () => {
      const handleSubmit = sinon.spy()
      component = render({onSubmit: handleSubmit})

      expect(TestUtils.findWithType(component, 'form').props.onSubmit).to.eq(handleSubmit)
    })
  })
})
