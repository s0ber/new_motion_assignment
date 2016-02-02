import './Layout.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

export default class Layout extends Component {
  render() {
    return (
      <div className='Layout'>
        {this.props.children}
      </div>
    )
  }
}

Layout.Header = class extends Component {
  render() {
    return (
      <div className='Layout-header'>
        {this.props.children}
        <div className='Layout-logo'>
          <div className='Layout-logoLeft' />
          <div className='Layout-logoCenter' />
          <div className='Layout-logoRight' />
        </div>
      </div>
    )
  }
}

Layout.Body = class extends Component {
  render() {
    return (
      <div className='Layout-body'>
        {this.props.children}
      </div>
    )
  }
}
