import './TextBox.sass'

import React, {Component, PropTypes} from 'react'
import Label from '../Label'

export default class TextBox extends Component {
  static propTypes = {
    label: PropTypes.string,
    password: PropTypes.bool
  }

  render() {
    const {label, children, required, password, value, ...other} = this.props

    return (
      <div className='TextBox'>
        {this.props.label && <Label {...other} label={label} required={required} />}
        <input {...other} type={this.props.password ? 'password' : 'text'} value={value} />
        {this.props.children}
      </div>
    )
  }
}
