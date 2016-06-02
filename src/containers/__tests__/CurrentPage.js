import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Simulate} from 'react-addons-test-utils'
import renderer from 'utils/test_helpers/renderer'

import CurrentPage from '../CurrentPage'
import PageLoader from 'layouts/PageLoader'

describe('CurrentPage', () => {
  let component
  let render

  before(() => {
    render = renderer(CurrentPage.WrappedComponent)
  })

  context('current page is not yet specified', () => {
    it('renders page loader', () => {
      component = render({currentPageId: null})
      expect(component).to.equalJSX(<PageLoader />)
    })
  })

  context('current page is specified', () => {
    it('renders associated page container', () => {
      const Home = class extends Component { render() { return(<div></div>) } }
      const Login = class extends Component { render() { return(<div></div>) } }
      CurrentPage.__Rewire__('Pages', {Home, Login})

      component = render({currentPageId: 'home'})
      expect(component).to.equalJSX(<Home />)
      expect(component).not.to.equalJSX(<Login />)

      component = render({currentPageId: 'login'})
      expect(component).not.to.equalJSX(<Home />)
      expect(component).to.equalJSX(<Login />)

      CurrentPage.__ResetDependency__('Pages')
    })
  })
})
