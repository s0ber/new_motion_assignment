import React, {Component} from 'react'
import {tinyActions} from 'redux-tiny-router'
import classNames from 'classnames'

export default class Link extends Component {
  navigateToPath = (e) => {
    e.preventDefault()
    this.context.store.dispatch(tinyActions.navigateTo(this.props.path, null))
  }

  static contextTypes = {store: React.PropTypes.any}

  render() {
    const linkClasses = classNames('Link', {
      'for-pageTitle': this.props.forPageTitle
    })

    const {path, ...rest} = this.props
    const href = `${path}`

    return (
      <a className={linkClasses} href={href} {...rest} onClick={this.navigateToPath}>
        {this.props.children}
      </a>
    )
  }
}
