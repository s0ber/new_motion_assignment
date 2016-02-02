import './TextBox.sass'

import React, {Component} from 'react'
import Label from '../Label'
import Hint from '../Hint'
import classNames from 'classnames'

export default class TextBox extends Component {
  render() {
    const {children, required, ...other} = this.props
    const textBoxClasses = classNames('TextBox', {'is-listValue': this.props.isListValue})

    return (
      <div className={textBoxClasses}>
        {this.props.label && <Label required={required} {...other} />}
        {this.props.password ? <input type='password' {...other} /> :
                               <input type='text' {...other} />}

        {this.props.hint && <Hint text={this.props.hint} />}
        {this.props.children}
      </div>
    )
  }
}
