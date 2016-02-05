import React, {Component} from 'react'
import {tinyActions} from 'redux-tiny-router'

export default class Link extends Component {
  navigateToPath = (e) => {
    e.preventDefault()
    this.context.store.dispatch(tinyActions.navigateTo(this.props.path, null))
  }

  static contextTypes = {store: React.PropTypes.any}

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
