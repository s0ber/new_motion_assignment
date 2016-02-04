import React, {Component} from 'react'
import Page from 'layouts/Page'

export default class extends Component {
  render() {
    return (
      <Page fixed pageId='home' photo='amsterdam'>
        <h1>Map</h1>
      </Page>
    )
  }
}
