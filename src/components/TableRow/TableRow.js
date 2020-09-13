import React from 'react'

import styles from './TableRow.module.scss'

const TableRow = ({ _id, id, firstName, lastName, email, phone }) => {
  return (
    <tr className={styles.row} data-id={_id}>
      <td className={styles.cell}>{id}</td>
      <td className={styles.cell}>{firstName}</td>
      <td className={styles.cell}>{lastName}</td>
      <td className={styles.cell}>{email}</td>
      <td className={styles.cell}>{phone}</td>
    </tr>
  )
}

export default TableRow
