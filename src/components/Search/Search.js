import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTermAction } from '../../store/term/actions'
import { clearSortParams } from '../../store/sort/actions'
import Button from '../Button/Button'

import styles from './Search.module.scss'

const Search = () => {
  const isTableLoaded = useSelector((state) => state.users.loaded)
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setTerm('')
  }, [isTableLoaded])

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(clearSortParams())
    dispatch(setTermAction(term.toLowerCase()))
  }

  const onTermChange = (e) => {
    setTerm(e.target.value)
  }

  const onSearchClick = () => {
    dispatch(clearSortParams())
    dispatch(setTermAction(term.toLowerCase()))
  }

  return (
    isTableLoaded && (
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          type="text"
          value={term}
          onChange={onTermChange}
          className={styles.input}
        />
        <Button type="submit" text="Search" onClick={onSearchClick} />
      </form>
    )
  )
}

export default Search
