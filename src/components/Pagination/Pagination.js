import React, { useMemo, memo } from 'react'
import classNames from 'classnames'

import styles from './Pagination.module.scss'
import { divide } from 'lodash'

const Pagination = ({ totalUsers, usersPerPage, currentPage, paginate }) => {
  const pageNumbers = useMemo(() => {
    const numbers = []

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
      numbers.push(i)
    }

    return numbers
  }, [totalUsers, usersPerPage])

  const onPaginationClick = (e) => {
    if (e.target.tagName === 'LI') {
      paginate(e.target.dataset.page)
    }
  }

  return (
    <div className={styles.paginationScroll}>
      <ul className={styles.pagination} onClick={onPaginationClick}>
        {pageNumbers.map((num) => (
          <li
            key={num}
            data-page={num}
            className={classNames(styles.item, num == currentPage && styles.itemActive)}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(Pagination)
