import './BackButton.sass'
import React, {Component} from 'react'
import Icon from 'icons/Icon'

export default class BackButton extends Component {
  render() {
    return (
      <span className='BackButton'>
        <Icon fa='chevron-left' /> {this.props.title}
      </span>
    )
  }
}
