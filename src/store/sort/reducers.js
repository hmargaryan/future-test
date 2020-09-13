import {
  SET_SORT_PARAMS,
  CLEAR_SORT_PARAMS
} from './types'

const sortInitialState = {
  key: null,
  order: null
}

export const sortReducer = (state = sortInitialState, action) => {
  switch (action.type) {
    case SET_SORT_PARAMS:
      return {
        ...state,
        key: action.payload.key,
        order: action.payload.order
      }
    case CLEAR_SORT_PARAMS:
      return {
        ...state,
        key: null,
        order: null
      }
    default:
      return state
  }
}