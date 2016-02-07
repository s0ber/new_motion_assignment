import React from 'react'
import {renderIntoDocument} from 'react-addons-test-utils'
import {findDOMNode} from 'react-dom'

export default function(MyComponent) {
  return (props) => {
    const component = renderIntoDocument(<MyComponent {...props} />)

    component.node = findDOMNode(component)
    return component
  }
}
