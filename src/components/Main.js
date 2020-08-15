import StartStopButton from './StartStopButton'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import KeywordsInput from './KeywordsInput'
import Log from './Log'

export default class Main extends Component {
  static propTypes = {
    started: PropTypes.bool.isRequired,
    phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
    log: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
  }

  receivedMessage(addLog, addMessage, results) {
    addLog(results)
    addMessage(results)
  }

  render() {
    const {started, log, phrases, actions} = this.props
    const {addLog, addMessage} = actions
    return <div>
      <StartStopButton started={started}
                       start={() => {
                         actions.start((results) => {
                           this.receivedMessage(addLog, addMessage, results)
                         })
                       }}
                       stop={actions.stop}/>
      <KeywordsInput phrases={phrases}
                     onChange={actions.changePhrases}/>
      <Log log={log}/>
    </div>
  }

}