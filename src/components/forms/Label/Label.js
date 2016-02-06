import './Label.sass'

import React, {Component, PropTypes} from 'react'
import InlineError from '../InlineError'
import classNames from 'classnames'

export default class Label extends Component {
  static propTypes = {
    required: PropTypes.bool,
    touched: PropTypes.bool,
    error: PropTypes.string,
    label: PropTypes.string.isRequired
  }

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
