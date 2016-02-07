import React from 'react'
import renderer from 'utils/test_helpers/renderer'

import Page from '../Page'

describe('Page', () => {
  let component
  const render = renderer(Page)

  it('renders page layout', () => {
    component = render({pageId: 'home', children: <span>Page Content</span>})
    expect(component).to.equalJSX(
      <div className='Page is-home'>
        <div className='Page-inner'>
          <span>Page Content</span>
        </div>
      </div>
    )
  })

  context('props.photo is provided', () => {
    it('render page with background classes', () => {
      component = render({pageId: 'home', children: <span>Page Content</span>, photo: 'amsterdam'})
      expect(component).to.equalJSX(
        <div className='Page is-home is-amsterdam has-background'>
          <div className='Page-inner'>
            <span>Page Content</span>
          </div>
        </div>
      )
    })
  })

  context('props.fixed is true', () => {
    it('renders fixed page layout', () => {
      component = render({fixed: true, pageId: 'home', children: <span>Page Content</span>})
      expect(component).to.equalJSX(
        <div className='Page is-home is-fixed'>
          <div className='Page-inner'>
            <span>Page Content</span>
          </div>
        </div>
      )
    })
  })
})
