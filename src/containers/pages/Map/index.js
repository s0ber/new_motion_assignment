import {connect} from 'react-redux'

import React, {Component, PropTypes} from 'react'
import Page from 'layouts/Page'
import Map from 'layouts/Map'

@connect((state) => {
  return {
    map: state.map
  }
})
export default class extends Component {
  static propTypes = {
    map: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    return (
      <Page fixed pageId='map'>
        <Map map={this.props.map} dispatch={this.props.dispatch} />
      </Page>
    )
  }
}
