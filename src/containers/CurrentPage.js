import {connect} from 'react-redux'
import toComponentName from 'utils/to_component_name'

import React, {Component, PropTypes} from 'react'
import Pages from './pages'
import PageLoader from 'layouts/PageLoader'

@connect((state) => {
  return {
    currentUser: state.currentUser,
    currentPageId: state.currentPageId
  }
})
export default class extends Component {
  static propTypes = {
    currentPageId: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    currentUser: PropTypes.object
  }

  render() {
    if (this.props.currentPageId) {
      const Page = Pages[toComponentName(this.props.currentPageId)]
      return (<Page currentUser={this.props.currentUser} dispatch={this.props.dispatch} />)
    } else {
      return (<PageLoader />)
    }
  }
}
