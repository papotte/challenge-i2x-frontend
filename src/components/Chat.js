import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Log from './Log'
import {MessageSummaryType} from '../constants/ASRTypes'
import Message from './Message'

export default class Chat extends Component {
  static propTypes = {
    log: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    messages: PropTypes.arrayOf(PropTypes.arrayOf(MessageSummaryType)).isRequired,
  }

  render() {
    const {log, messages} = this.props
    return <div>
      <div className={'text-lg mb-4'}>Transcript</div>
      <div className={'border-2 p-6 bg-blue-100 border-blue-800 rounded-md shadow-xl overflow-y-auto'}
           style={{height: '60vh'}}>
        <div className={'grid grid-cols-1 gap-2'}>
          {messages.map((messageGroup, index) =>
              <Message key={index} messages={messageGroup}/>,
          )}
        </div>
      </div>
      <Log log={log}/>
    </div>
  }

}
