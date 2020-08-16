import React from 'react'
import {createRenderer} from 'react-test-renderer/shallow'
import App from './App'
import MainContainer from './containers/FooterContainer'
import ChatContainer from './containers/ChatContainer'
import HeaderContainer from './containers/HeaderContainer'
import FooterContainer from './containers/FooterContainer'

const setup = _propOverrides => {
  const renderer = createRenderer()
  renderer.render(<App/>)
  let renderOutput = renderer.getRenderOutput()
  return renderOutput.props.children
}

describe('components', () => {
  describe('Header', () => {
    it('should render', () => {
      const output = setup()
      const [header] = output.props.children
      expect(header.type).toBe(HeaderContainer)
    })
  })

  describe('Footer', () => {
    it('should render', () => {
      const output = setup()
      const [, , footer] = output.props.children
      expect(footer.type).toBe(FooterContainer)
    })
  })
})
