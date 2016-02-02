import './InlineLabel.sass'

import React, {Component} from 'react'

export default class InlineLabel extends Component {
  render() {
    return (
      <label className='InlineLabel'>
        {this.props.children}
        <span className='InlineLabel-inner'>{this.props.label}</span>
      </label>
    )
  }
}

