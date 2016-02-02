import './Menu.sass'
import React, {Component} from 'react'
import classNames from 'classnames'
import Link from 'layouts/Link'

import {paths} from 'routes'

const pages = [
  {id: 'root', title: 'Home page', path: paths.ROOT_PATH()},
  {id: 'examples', title: 'Examples page', path: paths.EXAMPLES_PATH()},
  {id: 'page1', title: 'Page 1', path: paths.PAGE_ONE_PATH()},
  {id: 'page2', title: 'Page 2', path: paths.PAGE_TWO_PATH()}
]

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        {
          pages.map((item, i) => {
            const itemClasses = classNames('Menu-item', {
              'is-active': item.id == this.props.selectedPageId
            })

            return (
              <Link
                path={item.path}
                key={i}
                className={itemClasses} >
                {item.title}
              </Link>
            )
          })
        }
      </div>
    )
  }
}
