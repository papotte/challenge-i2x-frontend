import {ADD_LOG, ADD_MESSAGE, CHANGE_PHRASES, START, STOP} from '../constants/ActionTypes'
import {ASRClient} from '../asr/ASRClient'
import {compact} from 'lodash'

const initialState = {
  started: false,
  phrases: ['product', 'Hi', 'Hello', 'My name is'],
  log: '',
  messages: [
    {
      spotted: ['product', 'hello', 'my name is'],
      transcript: {
        endOffsetMsec: 6090,
        startOffsetMsec: 630,
        utterance: 'Hello, my name is one I would like to buy a product.',
      },
    },
  ],
  ASRInstance: new ASRClient('wss://vibe-rc.i2x.ai'),
}

export default function asr(state = initialState, action) {
  switch (action.type) {
    case START:
      const onMessage = action.onMessage
      state.ASRInstance.start(compact(state.phrases), (error, results) => {
        onMessage(results)
      })
      return {
        ...state,
        started: true,
        ASRInstance: state.ASRInstance,
      }

    case STOP:
      state.ASRInstance.stop()
      return {
        ...state,
        started: false,
        ASRInstance: state.ASRInstance,
      }

    case CHANGE_PHRASES:
      const nextPhrases = action.value.split('\n')
      if (state.ASRInstance.isStarted()) {
        state.ASRInstance.updateSpottingConfig(compact(nextPhrases))
      }
      state.phrases = nextPhrases
      return {
        ...state,
        phrases: nextPhrases,
        ASRInstance: state.ASRInstance,
      }

    case ADD_LOG:
      return {
        ...state,
        log: state.log + '\n' + JSON.stringify(action.result, null, 2),
      }

    case ADD_MESSAGE:
      if (action.message) {
        const newMessage = action.message

        return {
          ...state,
          messages: [
            ...state.messages,
            newMessage,
          ],
        }
      }
      return state

    default:
      return state
  }
}

