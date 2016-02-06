import './Map.sass'
import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Marker from 'layouts/Marker'

import updateMap from 'actions/map/updateMap'

export default class Map extends Component {
  static propTypes = {
    map: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  state = {
    chargers: []
  }

  componentDidMount() {
    const {lat, lng, zoom, chargers} = this.props.map

    this.map = new google.maps.Map(ReactDOM.findDOMNode(this), {
      zoom, center: {lat, lng}
    })
    this.setState({chargers})
  }

  componentWillReceiveProps(props) {
    const {lat, lng, zoom, chargers} = props.map

    this.map.setCenter({lat, lng})
    this.map.setZoom(zoom)
    this.setState({chargers})
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
      <div className='Map'>
        {
          this.state.chargers.map((charger, i) => {
            return <Marker key={i} map={this.map} lat={charger.lat} lng={charger.lng} />
          })
        }
      </div>
    )
  }
}
