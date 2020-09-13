import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { fetchUsers } from '../../store/users/actions'
import { setSortParams, clearSortParams } from '../../store/sort/actions'
import { setUserId } from '../../store/userId/actions'
import { sortUsers } from '../../store/selectors/sortSelector'
import Spinner from '../Spinner/Spinner'
import TableHeader from '../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow'
import Pagination from '../Pagination/Pagination'

import styles from './Table.module.scss'

const Table = ({ users }) => {
  const tableMode = useSelector((state) => state.tableMode)
  const { loading, loaded, error } = useSelector(({ users: { loading, loaded, error } }) => ({ loading, loaded, error }))
  const sort = useSelector((state) => state.sort)
  const term = useSelector((state) => state.term)
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()

  const usersPerPage = 50
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

  useEffect(() => {
    if (tableMode) {
      dispatch(fetchUsers(tableMode))
      dispatch(clearSortParams())
    }
    tableMode === 'small' && setCurrentPage(1)
  }, [tableMode])

  useEffect(() => {
    setCurrentPage(1)
  }, [term, sort])

  const onTableClick = (e) => {
    if (e.target.tagName === 'TH') {
      dispatch(setSortParams(e.target.textContent))
    } else if (e.target.tagName === 'TD') {
      dispatch(setUserId(e.target.parentNode.dataset.id))
    }
  }

  const paginate = (num) => {
    setCurrentPage(num)
  }

  return (
    <section>
      <p>{!tableMode && 'Choose the mode!'}</p>
      <div>{loading && <Spinner />}</div>
      <p className={styles.errorMessage}>{error && 'Something went wrong :('}</p>
      {loaded && (
        <div className={styles.tableScroll}>
          <table className={styles.table} onClick={onTableClick}>
            <thead>
              <TableHeader />
            </thead>
            <tbody>
              {currentUsers.map(({ _id, id, firstName, lastName, email, phone }) => {
                console.log(currentUsers.length)
                return (
                  <TableRow
                    key={_id}
                    _id={_id}
                    id={id}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    phone={phone}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      )}
      {users.length > 50 && (
        <Pagination
          totalUsers={users.length}
          usersPerPage={usersPerPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
    </section>
  )
}

const mapStateToProps = (state) => ({
  users: sortUsers(state)
})

export default connect(mapStateToProps)(Table)