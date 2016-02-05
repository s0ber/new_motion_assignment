import './Button.sass'
import React, {Component} from 'react'
import ButtonLoader from '../ButtonLoader'
import classNames from 'classnames'

export default class Button extends Component {
  render() {
    const buttonClasses = classNames('Button', this.props.className, {
      'is-red': this.props.color == 'red',
      'is-disabled': this.props.isLoading || this.props.disabled,
      'is-loading': this.props.isLoading
    })

    const isEnabled = !this.props.disabled

    if (this.props.submit) {
      return (
        <button type='submit' disabled={this.props.isLoading} className={buttonClasses} onClick={isEnabled && this.props.onClick}>
          <span className='Button-wrap'>{this.props.children}</span>
          {this.props.isLoading && <ButtonLoader />}
        </button>
      )
    } else {
      return (
        <span className={buttonClasses} onClick={isEnabled && this.props.onClick}>
          <span className='Button-wrap'>{this.props.children}</span>
          {this.props.isLoading && <ButtonLoader />}
        </span>
      )
    }
  }
}
