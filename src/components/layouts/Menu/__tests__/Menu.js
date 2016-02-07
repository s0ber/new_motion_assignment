import React from 'react'
import renderer from 'utils/test_helpers/renderer'

import Menu from '../Menu'
import Link from 'layouts/Link'
import Icon from 'icons/Icon'

describe('Menu', () => {
  let component
  const render = renderer(Menu)

  it('renders menu based on provided menu items array', () => {
    const menuItems = [
      {title: 'Map', path: '/map', icon: 'map-marker'},
      {title: 'Settings', path: '/settings', icon: 'gear'}
    ]

    component = render({items: menuItems})
    expect(component).to.equalJSX(
      <div className='Menu'>
        <Link className='Menu-item textShadow' key='0' path='/map'>
          <span><Icon className='Menu-itemIcon' fa='map-marker' /> <span>Map</span></span>
          <Icon fa='chevron-right' />
        </Link>
        <Link className='Menu-item textShadow' key='1' path='/settings'>
          <span><Icon className='Menu-itemIcon' fa='gear' /> <span>Settings</span></span>
          <Icon fa='chevron-right' />
        </Link>
      </div>
    )
  })
})
