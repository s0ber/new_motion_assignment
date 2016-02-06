import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Icon extends Component {
  static propTypes = {
    fa: PropTypes.string.isRequired
  }

  render() {
    return (<i className={classNames('fa', this.props.className, 'fa-' + this.props.fa)} />)
  }
}
