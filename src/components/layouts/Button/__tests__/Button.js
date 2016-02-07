import React from 'react'
import {Simulate} from 'react-addons-test-utils'
import renderer from 'utils/test_helpers/renderer'
import domRenderer from 'utils/test_helpers/domRenderer'

import Button from '../Button'
import ButtonLoader from 'layouts/ButtonLoader'

describe('Button', () => {
  let component
  let render

  describe('rendering', () => {
    before(() => {
      render = renderer(Button)
    })

    context('span button', () => {
      it('renders button with child components by default', () => {
        component = render({children: 'Button text'})
        expect(component).to.equalJSX(
          <span className='Button' onClick={null}>
            <span className='Button-wrap'>Button text</span>
          </span>
        )
      })

      context('button is loading', () => {
        it('renders button with a loader and is-disabled and is-loading classes', () => {
          component = render({children: 'Button text', isLoading: true})
          expect(component).to.equalJSX(
            <span className='Button is-disabled is-loading' onClick={false}>
              <span className='Button-wrap'>Button text</span>
              <ButtonLoader />
            </span>
          )
        })
      })

      context('button is disabled', () => {
        it('renders button with is-disabled class', () => {
          component = render({children: 'Button text', disabled: true})
          expect(component).to.equalJSX(
            <span className='Button is-disabled' onClick={false}>
              <span className='Button-wrap'>Button text</span>
            </span>
          )
        })
      })

      context('button color is red', () => {
        it('renders button with is-red class', () => {
          component = render({children: 'Button text', color: 'red'})
          expect(component).to.equalJSX(
            <span className='Button is-red' onClick={null}>
              <span className='Button-wrap'>Button text</span>
            </span>
          )
        })
      })
    })

    context('form submit button', () => {
      it('renders button with child components by default', () => {
        component = render({children: 'Button text', submit: true})
        expect(component).to.equalJSX(
          <button type='submit' disabled={false} className='Button' onClick={null}>
            <span className='Button-wrap'>Button text</span>
          </button>
        )
      })

      context('button is loading', () => {
        it('renders button with a loader and is-disabled and is-loading classes', () => {
          component = render({children: 'Button text', submit: true, isLoading: true})
          expect(component).to.equalJSX(
            <button type='submit' disabled={true} className='Button is-disabled is-loading' onClick={false}>
              <span className='Button-wrap'>Button text</span>
              <ButtonLoader />
            </button>
          )
        })
      })

      context('button is disabled', () => {
        it('renders button with is-disabled class', () => {
          component = render({children: 'Button text', submit: true, disabled: true})
          expect(component).to.equalJSX(
            <button type='submit' disabled={true} className='Button is-disabled' onClick={false}>
              <span className='Button-wrap'>Button text</span>
            </button>
          )
        })
      })

      context('button color is red', () => {
        it('renders button with is-red class', () => {
          component = render({children: 'Button text', submit: true, color: 'red'})
          expect(component).to.equalJSX(
            <button type='submit' disabled={false} className='Button is-red' onClick={null}>
              <span className='Button-wrap'>Button text</span>
            </button>
          )
        })
      })
    })
  })

  describe('events handling', () => {
    before(() => {
      render = domRenderer(Button)
    })

    context('span button', () => {
      it('handles clicks with props.onClick', () => {
        const handleClick = sinon.spy()
        component = render({children: 'Button text', onClick: handleClick})
        Simulate.click(component.node)
        expect(handleClick).to.be.calledOnce
      })

      context('button is loading', () => {
        it('doesnt call handler', () => {
          const handleClick = sinon.spy()
          component = render({children: 'Button text', isLoading: true, onClick: handleClick})
          Simulate.click(component.node)
          expect(handleClick).not.to.be.called
        })
      })

      context('button is disabled', () => {
        it('doesnt call handler', () => {
          const handleClick = sinon.spy()
          component = render({children: 'Button text', disabled: true, onClick: handleClick})
          Simulate.click(component.node)
          expect(handleClick).not.to.be.called
        })
      })
    })

    context('form submit button', () => {
      it('handles clicks with props.onClick', () => {
        const handleClick = sinon.spy()
        component = render({children: 'Button text', onClick: handleClick, submit: true})
        Simulate.click(component.node)
        expect(handleClick).to.be.calledOnce
      })

      context('button is loading', () => {
        it('doesnt call handler', () => {
          const handleClick = sinon.spy()
          component = render({children: 'Button text', isLoading: true, onClick: handleClick, submit: true})
          Simulate.click(component.node)
          expect(handleClick).not.to.be.called
        })
      })

      context('button is disabled', () => {
        it('doesnt call handler', () => {
          const handleClick = sinon.spy()
          component = render({children: 'Button text', disabled: true, onClick: handleClick, submit: true})
          Simulate.click(component.node)
          expect(handleClick).not.to.be.called
        })
      })
    })
  })
})
