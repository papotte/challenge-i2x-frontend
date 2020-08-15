import * as types from '../constants/ActionTypes'

export const start = (onMessage) => ({type: types.START, onMessage})
export const stop = () => ({type: types.STOP})
export const changePhrases = (value) => ({type: types.CHANGE_PHRASES, value})
export const addLog = result => ({type: types.ADD_LOG, result})
export const addMessage = message => ({type: types.ADD_MESSAGE, message})
