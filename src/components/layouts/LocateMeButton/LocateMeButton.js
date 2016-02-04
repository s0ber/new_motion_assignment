import './LocateMeButton.sass'
import React, {Component} from 'react'
import Icon from 'icons/Icon'

export default class LocateMeButton extends Component {
  handleGeolocation = () => {
    navigator.geolocation.getCurrentPosition(this.props.handleGeolocation)
  }

  render() {
    return (
      <span className='LocateMeButton' onClick={this.handleGeolocation}>
        <Icon fa='location-arrow' />
      </span>
    )
  }
}
