import StartStopButton from './StartStopButton'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  static propTypes = {
    started: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
  }

  receivedMessage(addLog, addMessage, results) {
    addLog(results)
    addMessage(results)
  }

  render() {
    const {started, actions} = this.props
    const {addLog, addMessage} = actions
    return <div>
      <StartStopButton started={started}
                       start={() => {
                         actions.start((results) => {
                           this.receivedMessage(addLog, addMessage, results)
                         })
                       }}
                       stop={actions.stop}/>
    </div>
  }

}
