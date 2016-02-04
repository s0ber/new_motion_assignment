import './Menu.sass'

import React, {Component} from 'react'
import Link from 'layouts/Link'
import Icon from 'icons/Icon'

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        {this.props.items.map((item, i) => {
          return (
            <Link className='Menu-item textShadow' key={i} path={item.path}>
              <span><Icon className='Menu-itemIcon' fa={item.icon} /> <span>{item.title}</span></span>
              <Icon fa='chevron-right' />
            </Link>
          )
        })}
      </div>
    )
  }
}
