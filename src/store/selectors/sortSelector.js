import { createSelector } from 'reselect'
import orderBy from 'lodash/orderBy'

const usersSelector = state => state.users.entities
const termSelector = state => state.term
const sortSelector = state => state.sort

export const sortUsers = createSelector(
  usersSelector,
  termSelector,
  sortSelector,
  (users, term, sort) => {
    const filteredUsers = users.filter(({ id, firstName, lastName, email, phone }) => {
      return (
        id.toString().includes(term || '') ||
        firstName.toLowerCase().includes(term || '') ||
        lastName.toLowerCase().includes(term || '') ||
        email.toLowerCase().includes(term || '') ||
        phone.toLowerCase().includes(term || '')
      )
    })
    if (sort.key) {
      return orderBy(filteredUsers, [sort.key], [sort.order])
    } else {
      return filteredUsers
    }
  }
)