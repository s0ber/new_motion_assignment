import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import loginUser from 'actions/currentUser/loginUser'

import Page from 'layouts/Page'
import Form from 'forms/Form'
import TextBox from 'forms/TextBox'
import Button from 'layouts/Button'

@reduxForm({
  form: 'login', fields: ['username', 'password']
})
export default class extends Component {
  submit = (values) => {
    return this.props.dispatch(loginUser(values))
  }

  render() {
    const {fields: {username, password}} = this.props

    return (
      <Page fixed photo='amsterdam'>
        <Form onSubmit={this.props.handleSubmit(this.submit)}>
          <Form.Fields>
            <TextBox autoFocus label='Email' {...username} />
            <TextBox password label='Password' {...password} />
          </Form.Fields>
          <Form.Actions centered>
            <Button submit isLoading={this.props.submitting}>Log In</Button>
          </Form.Actions>
        </Form>
      </Page>
    )
  }
}
