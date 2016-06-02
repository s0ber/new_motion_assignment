import {connect} from 'react-redux'
import toComponentName from 'utils/to_component_name'

import React, {Component, PropTypes} from 'react'
import Pages from './pages'
import PageLoader from 'layouts/PageLoader'

@connect((state) => {
  return {
    currentPageId: state.currentPageId
  }
})
export default class CurrentPage extends Component {
  static propTypes = {
    currentPageId: PropTypes.string,
  }

  render() {
    if (this.props.currentPageId) {
      const Page = Pages[toComponentName(this.props.currentPageId)]
      return (<Page />)
    } else {
      return (<PageLoader />)
    }
  }
}
