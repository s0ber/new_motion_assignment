import './ButtonLoader.sass'
import React, {Component} from 'react'

export default class ButtonLoader extends Component {
  render() {
    return (
      <div className='ButtonLoader'>
        <div className='ButtonLoader-item is-1'></div>
        <div className='ButtonLoader-item is-2'></div>
        <div className='ButtonLoader-item is-3'></div>
        <div className='ButtonLoader-item is-4'></div>
        <div className='ButtonLoader-item is-5'></div>
        <div className='ButtonLoader-item is-6'></div>
        <div className='ButtonLoader-item is-7'></div>
        <div className='ButtonLoader-item is-8'></div>
      </div>
    )
  }
}
