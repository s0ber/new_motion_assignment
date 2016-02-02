import './CheckBoxesList.sass'

import React, {Component} from 'react'
import Label from '../Label'
import InlineLabel from '../InlineLabel'
import Hint from '../Hint'

export default class CheckBoxesList extends Component {
  render() {
    return (
      <div className='CheckBoxesList'>
        <Label {...this.props} />
        {this.props.collection.map((item, i) =>
          <InlineLabel key={i} label={item.text} >
            <input type='checkbox' {...this.props} />
          </InlineLabel>
        )}
        {this.props.hint && <Hint text={this.props.hint} />}
      </div>
    )
  }
}
