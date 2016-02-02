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
      <Layout fixed>
        <Layout.Header />
        <Layout.Body>
          <CurrentPage />
        </Layout.Body>
      </Layout>
    )
  }
}
