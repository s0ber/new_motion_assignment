import React from 'react'
import {Simulate} from 'react-addons-test-utils'
import renderer from 'utils/test_helpers/renderer'
import domRenderer from 'utils/test_helpers/domRenderer'

import App from '../App'
import Link from 'layouts/Link'
import Layout from 'layouts/Layout'
import BackButton from 'layouts/BackButton'
import LocateMeButton from 'layouts/LocateMeButton'
import CurrentPage from 'containers/CurrentPage'
import {paths} from 'routes'

describe('App', () => {
  let component
  let render

  before(() => {
    render = renderer(App.WrappedComponent)
  })

  context('current page is specified', () => {
    it('renders default layout when current page is loading or when current page is home', () => {
      for (const page of [null, 'home']) {
        component = render({currentPageId: page})
        expect(component).to.equalJSX(
          <Layout>
            <Layout.Header
              minimizeLogo={false}
              leftButton={false}
              rightButton={false} />
            <Layout.Body>
              <CurrentPage />
            </Layout.Body>
          </Layout>
        )
      }
    })
  })

  context('current page is not home', () => {
    it('renders back button and minimizes logo', () => {
      component = render({currentPageId: 'login'})
      expect(component).to.equalJSX(
        <Layout>
          <Layout.Header
            minimizeLogo={true}
            leftButton={
              <Link path={paths.HOME_PATH()}><BackButton title='Home' /></Link>
            }
            rightButton={false} />
          <Layout.Body>
            <CurrentPage />
          </Layout.Body>
        </Layout>
      )
    })
  })

  context('current page is map', () => {
    it('renders geolocation button on the right', () => {
      component = render({currentPageId: 'map', map: {}, updateGeolocation: sinon.spy()})
      expect(component).to.equalJSX(
        <Layout>
          <Layout.Header
            minimizeLogo={true}
            leftButton={
              <Link path={paths.HOME_PATH()}><BackButton title='Home' /></Link>
            }
            rightButton={<LocateMeButton map={{}} handleGeolocation={sinon.spy()} /> } />
          <Layout.Body>
            <CurrentPage />
          </Layout.Body>
        </Layout>
      )
    })
  })
})
