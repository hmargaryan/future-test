import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

import styles from './TableHeader.module.scss'

const TableHeader = () => {
  const { key, order } = useSelector((state) => state.sort)

  const renderClassNames = (value) => {
    return classNames(
      styles.cell,
      value === key && styles[order]
    )
  }

  return (
    <tr className={styles.header}>
      <th className={renderClassNames('id')}>id</th>
      <th className={renderClassNames('firstName')}>firstName</th>
      <th className={renderClassNames('lastName')}>lastName</th>
      <th className={renderClassNames('email')}>email</th>
      <th className={renderClassNames('phone')}>phone</th>
    </tr>
  )
}

export default TableHeader
