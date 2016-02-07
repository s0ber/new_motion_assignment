import React from 'react'
import renderer from 'utils/test_helpers/renderer'

import Textbox from '../TextBox'
import Label from 'forms/Label'

describe('Textbox', () => {
  let component
  const render = renderer(Textbox)

  context('text input props are provided', () => {
    it('renders a text input', () => {
      component = render({name: 'my_field', value: 'field value'})

      expect(component).to.equalJSX(
        <div className='TextBox'>
          <input type='text' name='my_field' value='field value' />
        </div>
      )
    })
  })

  context('label is provided', () => {
    it('renders input with label', () => {
      component = render({label: 'Field Label', required: true, name: 'my_field', value: 'field value'})

      expect(component).to.equalJSX(
        <div className='TextBox'>
          <Label required={true} label='Field Label' name='my_field' />
          <input type='text' name='my_field' value='field value' />
        </div>
      )
    })
  })

  context('props.password is true', () => {
    it('renders input with password type', () => {
      component = render({password: true, name: 'my_field', value: ''})

      expect(component).to.equalJSX(
        <div className='TextBox'>
          <input type='password' name='my_field' value='' />
        </div>
      )
    })
  })

  context('children components are provided', () => {
    it('renders child components after the input', () => {
      component = render({name: 'my_field', value: 'field value', children: <span />})

      expect(component).to.equalJSX(
        <div className='TextBox'>
          <input type='text' name='my_field' value='field value' />
          <span />
        </div>
      )
    })
  })
})
