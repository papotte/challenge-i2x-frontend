import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
  static propTypes = {
    started: PropTypes.bool.isRequired,
  }

  render() {
    const {started} = this.props
    return <div>
      status: <b>session {started ? 'started' : 'stopped'}</b>
    </div>
  }

}
