import React, {Component} from 'react'
import Page from 'layouts/Page'
import Button from 'layouts/Button'

export default class extends Component {
  render() {
    return (
      <Page fixed photo='amsterdam'>
        <h1>Experience The&nbsp;New&nbsp;Motion</h1>
        <p>
          Please login to start using an app.
        </p>
        <Button title='Log In' color='green' />
      </Page>
    )
  }
}
