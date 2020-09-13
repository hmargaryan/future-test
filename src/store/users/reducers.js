import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  ADD_USER
} from './types'

const usersInitialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: []
}

export const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
        entities: []
      }
    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        entities: action.payload
      }
    }
    case FETCH_USERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
        entities: []

      }
    }
    case ADD_USER: {
      return {
        ...state,
        entities: [action.payload, ...state.entities]
      }
    }
    default:
      return state
  }
}