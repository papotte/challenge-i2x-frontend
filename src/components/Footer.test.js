import React from 'react'
import {createRenderer} from 'react-test-renderer/shallow'
import Footer from './Footer'
import StartStopButton from './StartStopButton'

const setup = (started) => {
  const props = {
    started: started,
    actions: {
      start: jest.fn(),
      stop: jest.fn(),
      addLog: jest.fn(),
      addMessage: jest.fn(),
    },
  }

  const renderer = createRenderer()
  renderer.render(<Footer {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer,
  }
}

describe('Footer', () => {
  it('should render correctly', () => {
    const {output} = setup(true)
    expect(output.type).toBe('div')

    const button = output.props.children
    expect(button.type).toBe(StartStopButton)
  })
})
