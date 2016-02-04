import './Map.sass'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import updateMap from 'actions/map/updateMap'

export default class Map extends Component {
  componentDidMount() {
    const {lat, lng, zoom} = this.props.map

    this.map = new google.maps.Map(ReactDOM.findDOMNode(this), {
      zoom, center: {lat, lng}
    })
  }

  componentDidUpdate() {
    const {lat, lng, zoom} = this.props.map
    this.map.setCenter({lat, lng})
    this.map.setZoom(zoom)
  }

  componentWillUnmount() {
    this.updateMapSettings()
  }

  updateMapSettings() {
    const center = this.map.getCenter()

    this.props.dispatch(updateMap({
      lat: center.lat(),
      lng: center.lng(),
      zoom: this.map.getZoom()
    }))
  }

  render() {
    return (
      <div className='Map'></div>
    )
  }
}
