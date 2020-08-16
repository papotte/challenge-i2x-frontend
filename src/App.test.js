import React from 'react'
import {createRenderer} from 'react-test-renderer/shallow'
import App from './App'
import MainContainer from './containers/MainContainer'
import ChatContainer from './containers/ChatContainer'

const setup = _propOverrides => {
  const renderer = createRenderer()
  renderer.render(<App />)
  return renderer.getRenderOutput()
}

describe('components', () => {
  describe('MainContainer', () => {
    it('should render', () => {
      const output = setup()
      const [main] = output.props.children
      expect(main.type).toBe(MainContainer)
    })
  })

  describe('ChatContainer', () => {
    it('should render', () => {
      const output = setup()
      const [, chat] = output.props.children
      expect(chat.type).toBe(ChatContainer)
    })
  })
})
