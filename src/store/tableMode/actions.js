import { CHANGE_TABLE_MODE } from './types'

export const changeTableMode = (mode) => ({
  type: CHANGE_TABLE_MODE,
  payload: mode
})