import {
  SET_TERM,
  CLEAR_TERM
} from './types'

const termInitialState = null

export const termReducer = (state = termInitialState, action) => {
  switch (action.type) {
    case SET_TERM:
      return action.payload
    case CLEAR_TERM:
      return null
    default:
      return state
  }
}