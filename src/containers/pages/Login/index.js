import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import loginUser from 'actions/currentUser/loginUser'

import Page from 'layouts/Page'
import Form from 'forms/Form'
import TextBox from 'forms/TextBox'
import Button from 'layouts/Button'

@reduxForm({
  form: 'login', fields: ['username', 'password']
})
@connect(null, (dispatch, props) => {
  return {
    submit: props.handleSubmit((values) => {
      return dispatch(loginUser(values))
    })
  }
})
export default class Login extends Component {
  static propTypes = {
    fields: PropTypes.shape({
      username: PropTypes.object.isRequired,
      password: PropTypes.object.isRequired
    }).isRequired,
    submit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  }

  render() {
    const {fields: {username, password}} = this.props

    return (
      <Page fixed photo='amsterdam'>
        <Form onSubmit={this.props.submit}>
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
