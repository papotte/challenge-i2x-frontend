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
      <ul className="message-list">
        {messages.map((message, index) =>
            <Message key={index} message={message}/>,
        )}
      </ul>


      <Log log={log}/>
    </div>
  }

}
