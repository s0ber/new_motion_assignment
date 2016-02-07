import './Button.sass'
import React, {Component, PropTypes} from 'react'
import ButtonLoader from '../ButtonLoader'
import classNames from 'classnames'

export default class Button extends Component {
  static defaultProps = {
    onClick: null,
    disabled: false,
    isLoading: false
  }

  static propTypes = {
    color: PropTypes.string,
    submit: PropTypes.bool,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func
  }

  render() {
    const buttonClasses = classNames('Button', {
      'is-red': this.props.color == 'red',
      'is-disabled': this.props.isLoading || this.props.disabled,
      'is-loading': this.props.isLoading
    })

    const isDisabled = this.props.isLoading || this.props.disabled

    if (this.props.submit) {
      return (
        <button
          type='submit'
          disabled={isDisabled}
          className={buttonClasses}
          onClick={!isDisabled && this.props.onClick}>
          <span className='Button-wrap'>{this.props.children}</span>
          {this.props.isLoading && <ButtonLoader />}
        </button>
      )
    } else {
      return (
        <span
          className={buttonClasses}
          onClick={!isDisabled && this.props.onClick}>
          <span className='Button-wrap'>{this.props.children}</span>
          {this.props.isLoading && <ButtonLoader />}
        </span>
      )
    }
  }
}
