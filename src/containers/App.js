import React, {Component} from 'react'
import {connect} from 'react-redux'

import Layout from 'layouts/Layout'
import FlashMessages from 'layouts/FlashMessages'
import Menu from 'layouts/Menu'
import Link from 'layouts/Link'

import {paths} from 'routes'
import CurrentPage from './CurrentPage'
import logoutUser from 'actions/currentUser/logoutUser'
import {ANONYMOUS} from 'constants'

@connect((state) => {
  return {
    flashMessages: state.flashMessages,
    currentPageId: state.currentPageId,
    currentUser: state.currentUser
  }
})
export default class extends Component {
  logoutUser = () => {
    this.props.dispatch(logoutUser())
  }

  constructor(props) {
    super(props)
  }

  render() {
    const isLoggedIn = this.props.currentUser && this.props.currentUser !== ANONYMOUS

    return (
      <Layout>
        {(this.props.flashMessages.length > 0) && <FlashMessages messages={this.props.flashMessages} dispatch={this.props.dispatch} />}
        <Menu selectedPageId={this.props.currentPageId} />
        <CurrentPage />
        {isLoggedIn ?
          <p>
            You are logged in as <b>{this.props.currentUser.full_name}</b>, <span onClick={this.logoutUser}>logout</span>
          </p> :
          <p>
            Please <Link path={paths.LOGIN_PATH()}>log in</Link> to access hidden pages.
          </p>
        }
      </Layout>
    )
  }
}
