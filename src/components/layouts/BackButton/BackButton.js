import './BackButton.sass'
import React, {Component, PropTypes} from 'react'
import Icon from 'icons/Icon'

export default class BackButton extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <span className='BackButton'>
        <Icon fa='chevron-left' /> {this.props.title}
      </span>
    )
  }
}
