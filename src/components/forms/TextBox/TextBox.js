import './TextBox.sass'

import React, {Component} from 'react'
import Label from '../Label'
import Hint from '../Hint'

export default class TextBox extends Component {
  render() {
    const {children, required, ...other} = this.props

    return (
      <div className='TextBox'>
        {this.props.label && <Label required={required} {...other} />}
        {this.props.password ? <input type='password' {...other} /> :
                               <input type='text' {...other} />}

        {this.props.hint && <Hint text={this.props.hint} />}
        {this.props.children}
      </div>
    )
  }
}
