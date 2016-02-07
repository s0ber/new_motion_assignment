import React from 'react'
import {Simulate} from 'react-addons-test-utils'
import renderer from 'utils/test_helpers/renderer'
import domRenderer from 'utils/test_helpers/domRenderer'

import LoginConnected, {Login} from '../index'
import Page from 'layouts/Page'
import Form from 'forms/Form'

describe('Login', () => {
  let component
  let render
  const TextBox = (props) => { return <div></div> }
  const Button = (props) => { return <div></div> }

  before(() => {
    render = domRenderer(Login)
    LoginConnected.__Rewire__('TextBox', TextBox)
    LoginConnected.__Rewire__('Button', Button)
  })

  after(() => {
    LoginConnected.__ResetDependency__('TextBox')
    LoginConnected.__ResetDependency__('Button')
  })

  it('renders a login form with submit handler', () => {
    const submit = sinon.spy
    component = render({fields: {username: {}, password: {}}, submitting: false, submit})

    expect(component.render()).to.eql(
      <Page fixed photo='amsterdam'>
        <Form onSubmit={submit}>
          <Form.Fields>
            <TextBox autoFocus label='Email' />
            <TextBox password label='Password' />
          </Form.Fields>
          <Form.Actions centered>
            <Button submit isLoading={false}>Log In</Button>
          </Form.Actions>
        </Form>
      </Page>
    )
  })
})
