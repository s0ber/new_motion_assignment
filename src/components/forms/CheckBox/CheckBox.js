import './CheckBox.sass'

import React, {Component} from 'react'
import Label from '../Label'
import Hint from '../Hint'

export default class CheckBox extends Component {
  render() {
    return (
      <div className='CheckBox'>
        <Label {...this.props} modifierClass='for-checkbox' >
          <input type='checkbox' {...this.props} />
        </Label>
        {this.props.hint && <Hint text={this.props.hint} />}
      </div>
    )
  }
}
