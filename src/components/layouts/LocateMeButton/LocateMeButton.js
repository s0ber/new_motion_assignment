import './LocateMeButton.sass'
import React, {Component, PropTypes} from 'react'
import Icon from 'icons/Icon'

export default class LocateMeButton extends Component {
  handleGeolocation = () => {
    navigator.geolocation.getCurrentPosition(this.props.handleGeolocation)
  }

  static propTypes = {
    handleGeolocation: PropTypes.func.isRequired
  }

  render() {
    return (
      <span className='LocateMeButton' onClick={this.handleGeolocation}>
        <Icon fa='location-arrow' />
      </span>
    )
  }
}
