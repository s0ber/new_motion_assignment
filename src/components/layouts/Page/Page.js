import './Page.sass'
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Page extends Component {
  static propTypes = {
    fixed: PropTypes.bool,
    photo: PropTypes.string,
    pageId: PropTypes.string
  }

  render() {
    const pageClasses = classNames('Page', `is-${this.props.pageId}`, {
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
