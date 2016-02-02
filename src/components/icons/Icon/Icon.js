import React, {Component} from 'react'
import classNames from 'classnames'

export default class Icon extends Component {
  render() {
    return (<i className={classNames('fa', 'fa-' + this.props.fa, this.props.className)} />)
  }
}
