import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Log from './Log'
import {MessageType} from '../constants/ASRTypes'
import Message from './Message'

export default class Chat extends Component {
  static propTypes = {
    log: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    messages: PropTypes.arrayOf(MessageType).isRequired,
  }

  render() {
    const {log, messages} = this.props
    console.log(messages)
    return <div>
      <div className={'text-lg mb-4'}>Transcript</div>
      <ul className={'border-2 p-6 bg-blue-100 border-blue-800 rounded-md shadow-xl overflow-y-auto'}
          style={{height: '60vh'}}>
        {messages.map((message, index) =>
            <Message key={index} message={message}/>,
        )}
      </ul>
      <Log log={log}/>
    </div>
  }

}
