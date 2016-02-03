import React, {Component} from 'react'
import Page from 'layouts/Page'
import Button from 'layouts/Button'
import Link from 'layouts/Link'

import {paths} from 'routes'

export default class extends Component {
  render() {
    return (
      <Page fixed pageId='home' photo='amsterdam'>
        <h1>Experience The&nbsp;New&nbsp;Motion</h1>
        <p>
          Please login to start using an app.
        </p>
        <Link path={paths.LOGIN_PATH()}>
          <Button title='Log In' />
        </Link>
      </Page>
    )
  }
}
