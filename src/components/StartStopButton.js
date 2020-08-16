import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class StartStopButton extends Component {
  static propTypes = {
    started: PropTypes.bool.isRequired,
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
  }

  onToggle = () => {
    if (this.props.started) {
      this.props.stop()
    } else {
      this.props.start()
    }
  }

  render() {
    return <div>
      <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded shadow'}
              onClick={this.onToggle}>{this.props.started ? 'Stop' : 'Start'} session</button>
    </div>
  }
}
