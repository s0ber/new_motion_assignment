import './Layout.sass'
import React, {Component, PropTypes} from 'react'
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
  static propTypes = {
    leftButton: PropTypes.node,
    rightButton: PropTypes.node,
    minimizeLogo: PropTypes.bool
  }

  render() {
    return (
      <div className='Layout-header'>
        {this.props.leftButton}
        <div className={classNames('Layout-logo', {'is-collapsed': this.props.minimizeLogo})}>
          <div className='Layout-logoLeft' />
          <div className='Layout-logoCenter' />
          <div className='Layout-logoRight' />
        </div>
        {this.props.rightButton}
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
