import React from 'react'
import {createRenderer} from 'react-addons-test-utils'

export default function(MyComponent) {
  return (props) => {
    const renderer = createRenderer()
    renderer.render(<MyComponent {...props} />)
    return renderer.getRenderOutput()
  }
}
