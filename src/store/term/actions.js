import {
  SET_TERM,
  CLEAR_TERM
} from './types'

export const setTermAction = (term) => ({
  type: SET_TERM,
  payload: term || null
})

export const clearTerm = () => ({
  type: CLEAR_TERM
})