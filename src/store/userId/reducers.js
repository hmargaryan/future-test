import { SET_USER_ID } from './types'

const userIdInitialState = null

export const userIdReducer = (state = userIdInitialState, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return action.payload
    default:
      return state
  }
}