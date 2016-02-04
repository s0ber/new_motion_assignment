import React, {Component} from 'react'
import Page from 'layouts/Page'

export default class extends Component {
  render() {
    return (
      <Page fixed pageId='home' photo='amsterdam'>
        <h1>Settings</h1>
      </Page>
    )
  }
}
