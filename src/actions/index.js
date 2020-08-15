import * as types from '../constants/ActionTypes'

export const start = () => ({type: types.START})
export const stop = () => ({type: types.STOP})
export const changePhrases = (value) => ({type: types.CHANGE_PHRASES, value})
export const addLog = result => ({type: types.ADD_LOG, result})
