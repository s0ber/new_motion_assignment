import './Map.sass'
import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Marker from 'layouts/Marker'

export default class Map extends Component {
  static defaultProps = {
    handleMapUpdate: null
  }

  static propTypes = {
    map: PropTypes.object.isRequired,
    handleMapUpdate: PropTypes.func
  }

  state = {
    chargers: []
  }

  componentDidMount() {
    const {lat, lng, zoom, chargers} = this.props.map

    this.map = new google.maps.Map(ReactDOM.findDOMNode(this), {
      zoom, center: {lat, lng}
    })

    if (chargers) {
      this.setState({chargers})
    }
  }

  componentWillReceiveProps(props) {
    const {lat, lng, zoom, chargers} = props.map

    this.map.setCenter({lat, lng})
    this.map.setZoom(zoom)

    if (chargers) {
      this.setState({chargers})
    }
  }

  componentWillUnmount() {
    this.updateMapSettings()
  }

  updateMapSettings() {
    const center = this.map.getCenter()
    this.props.handleMapUpdate && this.props.handleMapUpdate({
      lat: center.lat(),
      lng: center.lng(),
      zoom: this.map.getZoom()
    })
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
