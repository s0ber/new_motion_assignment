import React from 'react'
import renderer from 'utils/test_helpers/renderer'

import Layout from '../Layout'

describe('Layout', () => {
  let component
  const render = renderer(Layout)

  it('renders app layout', () => {
    component = render({children: <span />})
    expect(component).to.equalJSX(
      <div className='Layout'>
        <span />
      </div>
    )
  })
})

describe('Layout.Header', () => {
  let component
  const render = renderer(Layout.Header)

  it('renders app header', () => {
    component = render()
    expect(component).to.equalJSX(
      <div className='Layout-header'>
        <div className='Layout-logo'>
          <div className='Layout-logoLeft' />
          <div className='Layout-logoCenter' />
          <div className='Layout-logoRight' />
        </div>
      </div>
    )
  })

  context('props.minimizeLogo is true', () => {
    it('renders app header with collapsed logo', () => {
      component = render({minimizeLogo: true})

      expect(component).to.equalJSX(
        <div className='Layout-header'>
          <div className='Layout-logo is-collapsed'>
            <div className='Layout-logoLeft' />
            <div className='Layout-logoCenter' />
            <div className='Layout-logoRight' />
          </div>
        </div>
      )
    })
  })

  context('left or right buttons are specified', () => {
    it('renders app header with navigation buttons', () => {
      component = render({minimizeLogo: true, leftButton: <span>Left</span>, rightButton: <span>Right</span>})

      expect(component).to.equalJSX(
        <div className='Layout-header'>
          <span>Left</span>
          <div className='Layout-logo is-collapsed'>
            <div className='Layout-logoLeft' />
            <div className='Layout-logoCenter' />
            <div className='Layout-logoRight' />
          </div>
          <span>Right</span>
        </div>
      )
    })
  })
})

describe('Layout.Body', () => {
  let component
  const render = renderer(Layout.Body)

  it('renders app layout body', () => {
    component = render({children: <span />})
    expect(component).to.equalJSX(
      <div className='Layout-body'>
        <span />
      </div>
    )
  })
})
