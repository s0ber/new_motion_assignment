import './TextBox.sass'

import React, {Component, PropTypes} from 'react'
import Label from '../Label'

export default class TextBox extends Component {
  static propTypes = {
    label: PropTypes.string,
    password: PropTypes.bool
  }

  render() {
    const {children, required, ...other} = this.props

    return (
      <div className='TextBox'>
        {this.props.label && <Label required={required} {...other} />}
        {this.props.password ? <input type='password' {...other} /> :
                               <input type='text' {...other} />}
        {this.props.children}
      </div>
    )
  }
}
