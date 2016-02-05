import './Form.sass'
import React, {Component} from 'react'

export default class Form extends Component {
  render() {
    return (
      <form className='Form' onSubmit={this.props.onSubmit}>
        {this.props.children}
      </form>
    )
  }
}

Form.Fields = class extends Component {
  render() {
    return (<div className='Form-fields'>{this.props.children}</div>)
  }
}

Form.Actions = class extends Component {
  render() {
    return (
      <div className='Form-actions'>
        <div className='Form-actionsInner'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
