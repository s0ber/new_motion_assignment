import './FlashMessage.sass'

import React, {Component} from 'react'
import Icon from 'icons/Icon'
import classNames from 'classnames'

export default class FlashMessage extends Component {
  render() {
    const message = this.props.message
    const flashMessageClasses = classNames('FlashMessage', {
      'is-notice': message.type == 'notice',
      'is-alert': message.type == 'alert',
      'is-warning': message.type == 'warning'
    })

    return (
      <div className={flashMessageClasses}>
        <div className='FlashMessage-inner'>
          {message.message}
          <span className='FlashMessage-close' onClick={this.props.onClose}>
            <Icon fa='close' />
          </span>
        </div>
      </div>
    )
  }
}
