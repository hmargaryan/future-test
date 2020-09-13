import { SET_USER_ID } from './types'

export const setUserId = (id) => ({
  type: SET_USER_ID,
  payload: id
})