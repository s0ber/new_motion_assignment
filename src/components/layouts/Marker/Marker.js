import React, {Component} from 'react'

export default class Marker extends Component {
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
