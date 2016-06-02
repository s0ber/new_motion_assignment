import {connect} from 'react-redux'
import React, {Component, PropTypes} from 'react'
import Page from 'layouts/Page'
import MapComponent from 'layouts/Map'
import updateMap from 'actions/map/updateMap'

@connect((state) => {
  return {
    map: state.map
  }
}, (dispatch) => {
  return {
    updateMap: (mapOptions) => {
      dispatch(updateMap(mapOptions))
    }
  }
})
export default class Map extends Component {
  static propTypes = {
    map: PropTypes.object.isRequired
  }

  render() {
    return (
      <Page fixed pageId='map'>
        <MapComponent map={this.props.map} handleMapUpdate={this.props.updateMap} />
      </Page>
    )
  }
}
