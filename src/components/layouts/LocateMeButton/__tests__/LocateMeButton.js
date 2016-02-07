import React from 'react'
import {Simulate} from 'react-addons-test-utils'
import renderer from 'utils/test_helpers/renderer'
import domRenderer from 'utils/test_helpers/domRenderer'

import LocateMeButton from '../LocateMeButton'
import Icon from 'icons/Icon'

describe('LocateMeButton', () => {
  let component
  let render

  describe('rendering', () => {
    before(() => {
      render = renderer(LocateMeButton)
    })

    it('renders button', () => {
      component = render({handleGeolocation: sinon.spy()})
      expect(component).to.equalJSX(
        <span className='LocateMeButton' onClick={() => {}}>
          <Icon fa='location-arrow' />
        </span>
      )
    })
  })

  describe('events handling', () => {
    before(() => {
      render = domRenderer(LocateMeButton)
    })

    it('handles geolocation request with props.handleGeolocation', () => {
      // stub geolocation API
      navigator.__geolocation__ = navigator.geolocation
      navigator.geolocation = {getCurrentPosition: (fn) => { fn() }}

      const handleGeolocation = sinon.spy()
      component = render({handleGeolocation})
      Simulate.click(component.node)
      expect(handleGeolocation).to.be.calledOnce

      // restore geolocation API
      navigator.geolocation = navigator.__geolocation__
    })
  })
})
