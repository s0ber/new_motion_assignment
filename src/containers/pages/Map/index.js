import {connect} from 'react-redux'

import React, {Component, PropTypes} from 'react'
import Page from 'layouts/Page'
import Map from 'layouts/Map'

import updateMap from 'actions/map/updateMap'

@connect((state) => {
  return {
    map: state.map
  }
})
export default class extends Component {
  static propTypes = {
    map: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  updateMap = (mapOptions) => {
    this.props.dispatch(updateMap(mapOptions))
  }

  render() {
    return (
      <Page fixed pageId='map'>
        <Map map={this.props.map} dispatch={this.props.dispatch} handleMapUpdate={this.updateMap} />
      </Page>
    )
  }
}
