import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Layout from 'layouts/Layout'
import BackButton from 'layouts/BackButton'
import Link from 'layouts/Link'
import LocateMeButton from 'layouts/LocateMeButton'

import {paths} from 'routes'
import CurrentPage from './CurrentPage'
import updateMap from 'actions/map/updateMap'
import logoutUser from 'actions/currentUser/logoutUser'
import {ANONYMOUS} from 'constants'

@connect((state) => {
  return {
    map: state.map,
    currentPageId: state.currentPageId
  }
})
export default class extends Component {
  static propTypes = {
    map: PropTypes.object.isRequired,
    currentPageId: PropTypes.string
  }

  logoutUser = () => {
    this.props.dispatch(logoutUser())
  }

  updateGeolocation = (position) => {
    this.props.dispatch(updateMap({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      zoom: 15
    }))
  }

  constructor(props) {
    super(props)
  }

  render() {
    const isLoading = this.props.currentPageId == null
    const isHomePage = this.props.currentPageId == 'home'

    return (
      <Layout fixed>
        <Layout.Header
          minimizeLogo={!isLoading && !isHomePage}
          leftButton={
            !isLoading && !isHomePage &&
              <Link path={paths.HOME_PATH()}>
                <BackButton title='Home' />
              </Link>
          }
          rightButton={
            this.props.currentPageId == 'map' &&
              <LocateMeButton map={this.props.map} handleGeolocation={this.updateGeolocation} />
          } />
        <Layout.Body>
          <CurrentPage />
        </Layout.Body>
      </Layout>
    )
  }
}
