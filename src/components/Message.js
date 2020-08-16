import React, {Component} from 'react'
import {MessageSummaryType} from '../constants/ASRTypes'
import PropTypes from 'prop-types'

export default class Message extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(MessageSummaryType.isRequired).isRequired,
  }

  static makeKeywordsBold(string, keywords) {
    let text = string
    keywords.forEach((w) => {
      text = text.replace(w, `<b>${w}</b>`)
    })

    return text
  }

  render() {
    const {messages} = this.props

    return (
        <div className={'px-5 py-3 bg-blue-500 text-white rounded-lg shadow-xl inline-block'}>
          {messages.map(({transcript, spotted}, index) => {
            const highlightedText = Message.makeKeywordsBold(transcript, spotted)
            return <p key={index} dangerouslySetInnerHTML={{__html: highlightedText}}/>
          })}
        </div>
    )
  }
}
