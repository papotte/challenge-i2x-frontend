import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Log extends Component {
  static propTypes = {
    log: PropTypes.string.isRequired,
  }

  render() {
    const {log} = this.props
    return (<div style={{height: 600, overflowY: 'auto', border: '1px solid black'}}>
      <pre>{log}</pre>
    </div>)
  }
}
