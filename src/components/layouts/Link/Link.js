import React, {Component, PropTypes} from 'react'
import {tinyActions} from 'redux-tiny-router'

export default class Link extends Component {
  navigateToPath = (e) => {
    e.preventDefault()
    this.context.store.dispatch(tinyActions.navigateTo(this.props.path, null))
  }

  static propTypes = {
    path: PropTypes.string.isRequired
  }

  static contextTypes = {
    store: React.PropTypes.any
  }

  render() {
    const {path, ...rest} = this.props
    const href = `${path}`

    return (
      <a className='Link' href={href} {...rest} onClick={this.navigateToPath}>
        {this.props.children}
      </a>
    )
  }
}

// This is a wrapper above a Link component, which allows to specify custom context
export class TestableLink extends Component {
  static childContextTypes = {
    store: React.PropTypes.any
  }

  getChildContext() {
    return {store: this.props.store}
  }

  render() {
    return (
      <Link {...this.props} />
    )
  }
}
