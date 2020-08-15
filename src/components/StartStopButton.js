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
      <pre>{this.props.started}</pre>
      <button onClick={this.onToggle}>{this.props.started ? 'Stop' : 'Start'}</button>
    </div>
  }
}
