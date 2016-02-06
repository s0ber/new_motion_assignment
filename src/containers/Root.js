import 'styles/index.sass'
import 'font-awesome-webpack'

import React, {Component, PropTypes} from 'react'
import {Provider} from 'react-redux'
import App from './App'

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div id='app_root'>
          <App />
        </div>
      </Provider>
    )
  }
}
