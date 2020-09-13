import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeTableMode } from '../../store/tableMode/actions'
import { clearTerm } from '../../store/term/actions'
import classNames from 'classnames'

import styles from './TableModeSelect.module.scss'

const TableModeSelect = () => {
  const isTableLoading = useSelector((state) => state.users.loading)
  const dispatch = useDispatch()

  const onFormChange = (e) => {
    dispatch(changeTableMode(e.target.value))
    dispatch(clearTerm())
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Choose table mode</h2>
      <form onChange={onFormChange}>
        <input type="radio" name="tableMode" id="big" value="big" className={classNames(isTableLoading && styles.disabled)} />
        <label htmlFor="big" className={classNames(styles.label, isTableLoading && styles.disabled)}>Big data</label>

        <input type="radio" name="tableMode" id="small" value="small" className={classNames(isTableLoading && styles.disabled)} />
        <label htmlFor="small" className={classNames(styles.label, isTableLoading && styles.disabled)}>Small data</label>
      </form>
    </section>
  )
}

export default TableModeSelect
