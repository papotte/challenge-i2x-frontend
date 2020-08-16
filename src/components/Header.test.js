import React from 'react'
import {createRenderer} from 'react-test-renderer/shallow'
import Header from './Header'

const setup = (started) => {
  const props = {
    started: started,
  }

  const renderer = createRenderer()
  renderer.render(<Header {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer,
  }
}

describe('Header', () => {
  it('should render correctly', () => {
    const {output} = setup(true)
    expect(output.type).toBe('div')
    expect(output.props.className).toContain('toolbar')

    const [, status] = output.props.children
    expect(status.type).toBe('b')
    expect(status.props.children).toBe('Session started')
  })

  it('should display disconnected is not started', () => {
    const {output} = setup(false)
    const [, status] = output.props.children
    expect(status.props.children).toBe('Disconnected')
  })
})
