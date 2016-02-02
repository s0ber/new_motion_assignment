import './PageLoader.sass'
import React, {Component} from 'react'

export default class PageLoader extends Component {
  render() {
    return (
      <div className='PageLoader'>
        <div className='PageLoader-cube'></div>
        <div className='PageLoader-cube is-2'></div>
        <div className='PageLoader-cube is-3'></div>
        <div className='PageLoader-cube is-4'></div>
      </div>
    )
  }
}
