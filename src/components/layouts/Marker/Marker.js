import React, {Component, PropTypes} from 'react'

export default class Marker extends Component {
  static propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    map: PropTypes.object.isRequired
  }

  componentDidMount() {
    const {map, lat, lng} = this.props

    this.marker = new google.maps.Marker({
      map,
      position: {lat, lng}
    })
  }

  componentWillUnmount() {
    this.marker.setMap(null)
  }

  render() {
    return null
  }
}
