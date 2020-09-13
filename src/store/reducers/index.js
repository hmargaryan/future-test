import { combineReducers } from 'redux'

import { tableModeReducer } from '../tableMode/reducers'
import { usersReducer } from '../users/reducers'
import { sortReducer } from '../sort/reducers'
import { termReducer } from '../term/reducers'
import { userIdReducer } from '../userId/reducers'

export const rootReducer = combineReducers({
  tableMode: tableModeReducer,
  users: usersReducer,
  sort: sortReducer,
  term: termReducer,
  userId: userIdReducer
})