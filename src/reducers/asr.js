import {ADD_LOG, CHANGE_PHRASES, START, STOP} from '../constants/ActionTypes'

const initialState = {
  started: false,
  phrases: ['product', 'Hi', 'Hello', 'My name is'],
  log: '',
}

export default function asr(state = initialState, action) {
  switch (action.type) {
    case START:
      return {
        ...state,
        started: true,
        ASRInstance: state.ASRInstance,
      }

    case STOP:
      return {
        ...state,
        started: false,
        ASRInstance: state.ASRInstance,
      }

    case CHANGE_PHRASES:
      return {
        ...state,
        phrases: action.value,
        ASRInstance: state.ASRInstance,
      }

    case ADD_LOG:
      return {
        ...state,
        log: state.log + '\n' + JSON.stringify(action.result, null, 2),
      }

    default:
      return state
  }
}

