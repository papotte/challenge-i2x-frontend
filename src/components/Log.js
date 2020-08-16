import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Log extends Component {
  static propTypes = {
    log: PropTypes.string.isRequired,
  }

  state = {
    showLog: false,
  }

  _toggleLog = () => {
    this.setState({showLog: !this.state.showLog})
  }

  render() {
    const {log} = this.props
    let element
    if (this.state.showLog) {
      element = (<div className={'border p-2 border-black rounded-md overflow-y-auto h-16'}>
        <pre>{log}</pre>
      </div>)
    }
    return (
        <div className={'my-2'}>
          <button
              className={'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded text-xs'}
              onClick={this._toggleLog}>{this.state.showLog ? 'Hide' : 'Show'} log
          </button>
          <div className={'mt-2'}>{element}</div>
        </div>
    )
  }
}
