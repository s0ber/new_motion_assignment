import React from 'react'
import ReactDOM from 'react-dom'
import {Simulate} from 'react-addons-test-utils'
import renderer from 'utils/test_helpers/renderer'
import domRenderer from 'utils/test_helpers/domRenderer'

import Marker from '../Marker'

describe('Marker', () => {
  let component
  let render
  let map

  before(() => {
    render = domRenderer(Marker)
    map = new google.maps.Map()
  })

  it('renders nothing', () => {
    component = render({map, lat: 10, lng: 20})
    expect(component.render()).to.eq(null)
  })

  it('creates google marker instance when mounter', () => {
    component = render({map, lat: 10, lng: 20})
    expect(component.marker).to.be.instanceOf(google.maps.Marker)
    expect(component.marker.settings).to.be.eql({map, position: {lat: 10, lng: 20}})
  })

  it('removes marker from the map, when component is unmounter', () => {
    const div = document.createElement('div')
    component = ReactDOM.render(<Marker map={map} lat={10} lng={20} />, div)
    ReactDOM.unmountComponentAtNode(div)
    expect(component.marker.setMap).to.be.calledOnce
    expect(component.marker.setMap.lastCall.args).to.be.eql([null])
  })
})
