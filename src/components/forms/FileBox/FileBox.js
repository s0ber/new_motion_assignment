import './FileBox.sass'

import React, {Component} from 'react'
import Label from '../Label'
import Hint from '../Hint'

export default class FileBox extends Component {
  render() {
    return (
      <div className='Textarea'>
        <Label {...this.props} />
        <input type='file' {...this.props} />
        {this.props.hint && <Hint text={this.props.hint} />}
      </div>
    )
  }
}
