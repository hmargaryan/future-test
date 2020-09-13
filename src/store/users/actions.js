import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  ADD_USER
} from './types'
import axios from 'axios'
import { nanoid } from 'nanoid'

export const fetchUsers = (tableMode) => async dispatch => {
  try {
    dispatch({
      type: FETCH_USERS_REQUEST
    })

    const rows = tableMode === 'big' ? 1000 : 32
    const delay = tableMode === 'big' ? '&delay=3' : ''
    const { data } = await axios.get(`http://www.filltext.com/?rows=${rows}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}${delay}`)
    console.log(data)
    /*
      Так как id с сервера не всегда уникальный,
      было приянто решение генерировать новый
      айдишник при помощи пакета nanoid
    */
    const users = data.map((user) => ({ ...user, ['_id']: nanoid() }))

    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: users
    })
  } catch (error) {
    dispatch({
      type: FETCH_USERS_FAIL,
      payload: error.message
    })
  }
}

export const addUser = (user) => ({
  type: ADD_USER,
  payload: { ['_id']: nanoid(), ...user }
})