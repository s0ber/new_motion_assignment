import './Label.sass'

import React, {Component} from 'react'
import InlineError from '../InlineError'
import classNames from 'classnames'

export default class Label extends Component {
  render() {
    const Abbr = this.props.required && <abbr title='require'>*</abbr>
    const Error = this.props.touched && this.props.error && <InlineError text={this.props.error} />

    return (
      <label className={classNames('Label', {'is-required': this.props.required})}>
        {this.props.children}
        <span className='Label-inner'>{Abbr} {this.props.label}</span>
        {Error}
      </label>
    )
  }
}
