import {
  SET_SORT_PARAMS,
  CLEAR_SORT_PARAMS
} from './types'

export const setSortParams = (key) => (dispatch, getState) => {
  const prevKey = getState().sort.key
  const order = getState().sort.order
  dispatch({
    type: SET_SORT_PARAMS,
    payload: {
      key,
      order: order === 'desc' || !order || prevKey !== key ? 'asc' : 'desc'
    }
  })
}

export const clearSortParams = () => ({
  type: CLEAR_SORT_PARAMS
})