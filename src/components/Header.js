import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
  static propTypes = {
    started: PropTypes.bool.isRequired,
  }

  render() {
    const {started} = this.props
    return <div className={'toolbar p-2 text-2xl'}>
      Status: <b>{started ? 'Session started' : 'Disconnected'}</b>
    </div>
  }

}
