import React, {Component} from 'react'
import {connect} from 'react-redux'

import Layout from 'layouts/Layout'
import BackButton from 'layouts/BackButton'
import Link from 'layouts/Link'

import {paths} from 'routes'
import CurrentPage from './CurrentPage'
import logoutUser from 'actions/currentUser/logoutUser'
import {ANONYMOUS} from 'constants'

@connect((state) => {
  return {
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
    const isHomePage = this.props.currentPageId == 'home'
    const isLoading = this.props.currentPageId == null

    return (
      <Layout fixed>
        <Layout.Header minimizeLogo={!isLoading && !isHomePage}>
          {!isLoading && !isHomePage &&
            <Link path={paths.HOME_PATH()}>
              <BackButton title='Home' />
            </Link>
          }
        </Layout.Header>
        <Layout.Body>
          <CurrentPage />
        </Layout.Body>
      </Layout>
    )
  }
}
