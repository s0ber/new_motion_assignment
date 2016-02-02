import './Page.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

export default class Page extends Component {
  render() {
    const pageClasses = classNames('Page', {
      'is-fixed': this.props.fixed,
      'has-background': this.props.photo,
      'is-amsterdam': this.props.photo == 'amsterdam'
    })
    return (
      <div className={pageClasses}>
        <div className='Page-inner'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
