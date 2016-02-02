import './SelectBox.sass'

import React, {Component} from 'react'
import Label from '../Label'
import Hint from '../Hint'

export default class SelectBox extends Component {
  render() {
    return (
      <div className='SelectBox'>
        <Label {...this.props} />
        <select {...this.props} value={this.props.value || ''}>
          {this.props.collection.map((item, i) => <option key={i} value={item.value}>{item.text}</option>)}
        </select>
        {this.props.hint && <Hint text={this.props.hint} />}
      </div>
    )
  }
}
