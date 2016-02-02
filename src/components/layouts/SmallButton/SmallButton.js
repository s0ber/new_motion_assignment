import './SmallButton.sass'
import React, {Component} from 'react'
import ButtonLoader from '../ButtonLoader'
import classNames from 'classnames'

export default class SmallButton extends Component {
  render() {
    const buttonClasses = classNames('SmallButton', this.props.className, {
      'is-green': this.props.color == 'green',
      'is-red': this.props.color == 'red',
      'is-icon': !!this.props.icon,
      'is-disabled': this.props.isLoading || this.props.disabled,
      'is-loading': this.props.isLoading
    })

    const text = this.props.icon ? <i className={classNames('fa', 'fa-' + this.props.icon)} />
                                 : this.props.children || this.props.title
    const isEnabled = !this.props.disabled

    if (this.props.submit) {
      return (
        <button type='submit' disabled={this.props.isLoading} className={buttonClasses} onClick={isEnabled && this.props.onClick}>
          <span className='SmallButton-wrap'>{text}</span>
          {this.props.isLoading && <ButtonLoader />}
        </button>
      )
    } else {
      return (
        <div className={buttonClasses} onClick={isEnabled && this.props.onClick}>
          <span className='SmallButton-wrap'>{text}</span>
          {this.props.isLoading && <ButtonLoader />}
        </div>
      )
    }
  }
}
