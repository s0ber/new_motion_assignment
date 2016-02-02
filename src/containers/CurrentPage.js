import {connect} from 'react-redux'
import toComponentName from 'utils/to_component_name'

import React, {Component} from 'react'
import Pages from './pages'
import PageLoader from 'layouts/PageLoader'

@connect((state) => {
  return {
    currentUser: state.currentUser,
    currentPageId: state.currentPageId
  }
})
export default class extends Component {
  render() {
    if (this.props.currentPageId) {
      const Page = Pages[toComponentName(this.props.currentPageId)]
      return (<Page />)
    } else {
      return (<PageLoader />)
    }
  }
}
