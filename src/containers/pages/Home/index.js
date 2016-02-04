import React, {Component} from 'react'
import Page from 'layouts/Page'
import Button from 'layouts/Button'
import Link from 'layouts/Link'
import Menu from 'layouts/Menu'

import {ANONYMOUS} from 'constants'
import {paths} from 'routes'
import logoutUser from 'actions/currentUser/logoutUser'
import {MENU_ITEMS} from 'constants'

export default class extends Component {
  logoutUser = () => {
    this.props.dispatch(logoutUser())
  }

  render() {
    const currentUser = this.props.currentUser
    const isLoggedIn = currentUser && currentUser !== ANONYMOUS

    if (isLoggedIn) {
      return (
        <Page fixed pageId='home' photo='amsterdam'>
          <h1>{`Welcome, ${currentUser.firstName} ${currentUser.lastName}`}</h1>
          <Menu items={MENU_ITEMS} />
          <Button color='red' title='Log Out' onClick={this.logoutUser} />
        </Page>
      )
    } else {
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
}
