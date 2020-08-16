import {connect} from 'react-redux'
import * as ASRActions from '../actions'
import {bindActionCreators} from 'redux'
import Chat from '../components/Chat'

const TwoSecondsInMS = 2000

export function combineMessagesByTime(messages) {
  const groupedMessages = []
  let lastTime = 0
  for (let message of messages) {
    const {endOffsetMsec, startOffsetMsec, utterance} = message.transcript
    const nm = {spotted: message.spotted, transcript: utterance}
    if (groupedMessages.length && startOffsetMsec <= (lastTime + TwoSecondsInMS)) {
      const lastGroup = groupedMessages.pop()
      lastGroup.push(nm)
      groupedMessages.push(lastGroup)
    } else {
      groupedMessages.push([nm])
    }

    lastTime = endOffsetMsec
  }
  return groupedMessages
}

const mapStateToProps = state => ({
  log: state.asr.log,
  messages: combineMessagesByTime(state.asr.messages),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ASRActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Chat)

