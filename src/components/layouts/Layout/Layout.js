import './Layout.sass'
import React, {Component} from 'react'

export default class Layout extends Component {
  render() {
    return (
      <div className='Layout'>
        {this.props.children}
      </div>
    )
  }
}
