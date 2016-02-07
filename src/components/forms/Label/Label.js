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
    const Error = this.props.touched && this.props.error && <InlineError text={this.props.error} />

    return (
      <label className={classNames('Label', {'is-required': this.props.required})}>
        {this.props.children}
        {this.props.required ?
          <span className='Label-inner'><abbr title='require'>*</abbr> {this.props.label}</span> :
          <span className='Label-inner'>{this.props.label}</span> }
        {Error}
      </label>
    )
  }
}
