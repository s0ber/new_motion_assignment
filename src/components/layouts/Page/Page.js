import './Page.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

export default class Page extends Component {
  render() {
    return (
      <div className={classNames('Page', {'is-fixed': this.props.fixed})}>
        <div className='Page-inner'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
