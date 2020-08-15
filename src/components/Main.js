import StartStopButton from './StartStopButton'
import React from 'react'
import PropTypes from 'prop-types'
import ChatBox from './ChatBox'
import Log from './Log'
import {ASRClient} from '../asr/ASRClient'
import {compact} from 'lodash'

const ASRInstance = new ASRClient('wss://vibe-rc.i2x.ai')
const onMessageChange = (phrases) => {
  if (ASRInstance.isStarted()) {
    ASRInstance.updateSpottingConfig(compact(phrases))
  }
}
const Main = ({started, phrases, log, actions}) => (
    <div>
      <StartStopButton started={started} start={() => {
        actions.start()
        ASRInstance.start(compact(phrases), (error, results) => {
          actions.addLog(results)
        })
      }} stop={() => {
        ASRInstance.stop()
        actions.stop()
      }}/>
      <ChatBox phrases={phrases} onChange={(value) => {
        const nextPhrases = value.split('\n')
        actions.changePhrases(nextPhrases)
        onMessageChange(nextPhrases)
      }}/>
      <Log log={log}/>
    </div>
)

Main.propTypes = {
  started: PropTypes.bool.isRequired,
  phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
  log: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
}

export default Main
