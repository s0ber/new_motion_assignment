import './RadioButtonsList.sass'

import React, {Component} from 'react'
import Label from '../Label'
import InlineLabel from '../InlineLabel'
import Hint from '../Hint'

export default class RadioButtonsList extends Component {
  render() {
    const {required, collection, ...other} = this.props

    return (
      <div className='RadioButtonsList'>
        <Label required={required} {...other} />
        {collection.map((item, i) =>
          <InlineLabel key={i} label={item.text} >
            <input type='radio' {...other} value={item.value} checked={this.props.value == item.value} />
          </InlineLabel>
        )}
        {this.props.hint && <Hint text={this.props.hint} />}
      </div>
    )
  }
}
