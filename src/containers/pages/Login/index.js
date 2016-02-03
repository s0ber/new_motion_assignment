import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import loginUser from 'actions/currentUser/loginUser'

import Page from 'layouts/Page'
import Form from 'forms/Form'
import TextBox from 'forms/TextBox'
import Button from 'layouts/Button'

@reduxForm({
  form: 'login', fields: ['email', 'password', 'remember_me']
})
export default class extends Component {
  submit = (values) => {
    return this.props.dispatch(loginUser(values))
  }

  render() {
    const {fields: {email, password, remember_me}} = this.props

    return (
      <Page fixed photo='amsterdam'>
        <Form onSubmit={this.props.handleSubmit(this.submit)}>
          <Form.Fields>
            <TextBox required autoFocus label='Email' {...email} />
            <TextBox password label='Password' {...password} />
          </Form.Fields>
          <Form.Actions centered>
            <Button submit isLoading={this.props.submitting} title='Log In' />
          </Form.Actions>
        </Form>
      </Page>
    )
  }
}
