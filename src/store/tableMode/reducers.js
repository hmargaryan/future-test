import { CHANGE_TABLE_MODE } from './types'

export const tableModeReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_TABLE_MODE:
      return action.payload
    default:
      return state
  }
}