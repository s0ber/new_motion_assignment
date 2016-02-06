import React, {Component} from 'react'
import classNames from 'classnames'

export default class Icon extends Component {
  render() {
    return (<i className={classNames('fa', this.props.className, 'fa-' + this.props.fa)} />)
  }
}
