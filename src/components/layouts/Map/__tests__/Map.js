import React from 'react'
import ReactDOM from 'react-dom'
import {Simulate, findRenderedDOMComponentWithClass} from 'react-addons-test-utils'
import renderer from 'utils/test_helpers/renderer'
import domRenderer from 'utils/test_helpers/domRenderer'
import stubGoogleMapsApi from 'utils/test_helpers/stubGoogleMapsApi'

import Map from '../Map'
import Marker from 'layouts/Marker'

describe('Map', () => {
  let component
  let render

  before(() => {
    render = domRenderer(Map)
  })

  beforeEach(() => {
    stubGoogleMapsApi()
  })

  it('renders a map div', () => {
    component = render({map: {lat: 10, lng: 20, zoom: 5}})
    expect(component.render()).to.equalJSX(
      <div className='Map' />
    )
  })

  it('renders chargers after mounting', () => {
    component = render({map: {lat: 10, lng: 20, zoom: 5, chargers: [{lat: 1, lng: 2}, {lat: 3, lng: 4}]}})
    expect(component.render()).to.equalJSX(
      <div className='Map'>
        <Marker key='0' lat={1} lng={2} map={component.map} />
        <Marker key='1' lat={3} lng={4} map={component.map} />
      </div>
    )
  })

  it('updates chargers state, when their values are received in props', () => {
    const div = document.createElement('div')
    component = ReactDOM.render(<Map map={{lat: 10, lng: 20, zoom: 5, chargers: [{lat: 1, lng: 2}, {lat: 3, lng: 4}]}} />, div)

    expect(component.render()).to.equalJSX(
      <div className='Map'>
        <Marker key='0' lat={1} lng={2} map={component.map} />
        <Marker key='1' lat={3} lng={4} map={component.map} />
      </div>
    )

    ReactDOM.render(<Map map={{lat: 10, lng: 20, zoom: 5, chargers: [{lat: 5, lng: 7}]}} />, div)
    expect(component.render()).to.equalJSX(
      <div className='Map'>
        <Marker key='0' lat={5} lng={7} map={component.map} />
      </div>
    )
  })

  it('creates google map instance when mounted', () => {
    component = render({map: {lat: 10, lng: 20, zoom: 5}})
    expect(component.map).to.be.instanceOf(google.maps.Map)
    expect(component.map.node).to.be.eq(component.node)
    expect(component.map.settings).to.be.eql({zoom: 5, center: {lat: 10, lng: 20}})
  })

  it('changes map settings, when props updated', () => {
    const div = document.createElement('div')
    component = ReactDOM.render(<Map map={{lat: 10, lng: 20, zoom: 5}} />, div)
    expect(component.map.setZoom).to.be.not.called
    ReactDOM.render(<Map map={{lat: 15, lng: 25, zoom: 10}} />, div)
    expect(component.map.setZoom).to.be.calledOnce
    expect(component.map.setZoom.lastCall.args).to.be.eql([10])

    expect(component.map.setCenter).to.be.calledOnce
    expect(component.map.setCenter.lastCall.args).to.be.eql([{lat: 15, lng: 25}])
  })

  it('passes map info into props.handleMapUpdate on unmount', () => {
    const handleMapUpdate = sinon.spy()
    component = render({map: {lat: 10, lng: 20, zoom: 5}, handleMapUpdate})
    ReactDOM.unmountComponentAtNode(component.node.parentNode)
    expect(handleMapUpdate).to.be.calledOnce
    expect(handleMapUpdate.lastCall.args).to.be.eql([{lat: 5, lng: 10, zoom: 15}])
  })
})
