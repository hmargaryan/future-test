import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useInput } from '../../hooks/useInput'
import { addUser } from '../../store/users/actions'
import Button from '../Button/Button'

import styles from './AddUser.module.scss'

const AddUser = () => {
  const isTableLoaded = useSelector((state) => state.users.loaded)
  const [isFormOpened, setIsFormOpened] = useState(false)
  const id = useInput('')
  const firstName = useInput('')
  const lastName = useInput('')
  const email = useInput('')
  const phone = useInput('')
  const dispatch = useDispatch()

  useEffect(() => {
    setIsFormOpened(false)
    id.clear()
    firstName.clear()
    lastName.clear()
    email.clear()
    phone.clear()
  }, [isTableLoaded])

  const onOpenFormClick = () => {
    setIsFormOpened((prevState) => !prevState)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const onAddUserClick = () => {
    if (id.main.value && firstName.main.value && lastName.main.value && email.main.value && phone.main.value) {
      dispatch(addUser({
        id: id.main.value,
        firstName: firstName.main.value,
        lastName: lastName.main.value,
        email: email.main.value,
        phone: phone.main.value
      }))

      id.clear()
      firstName.clear()
      lastName.clear()
      email.clear()
      phone.clear()
    }
  }

  return (
    isTableLoaded && (
      <section className={styles.container}>
        <Button type="button" text="Add" onClick={onOpenFormClick} />
        {isFormOpened && (
          <form onSubmit={onSubmit} className={styles.form}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.title}>id</th>
                  <th className={styles.title}>firstName</th>
                  <th className={styles.title}>lastName</th>
                  <th className={styles.title}>email</th>
                  <th className={styles.title}>phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="number" {...id.main} className={styles.input} required /></td>
                  <td><input type="text" {...firstName.main} className={styles.input} required /></td>
                  <td><input type="text" {...lastName.main} className={styles.input} required /></td>
                  <td><input type="text" {...email.main} className={styles.input} required /></td>
                  <td><input type="number" {...phone.main} className={styles.input} required /></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <tr>
                    <Button
                      type="submit"
                      text="Add user to table"
                      onClick={onAddUserClick}
                      isDisabled={
                        !id.main.value ||
                        !firstName.main.value ||
                        !lastName.main.value ||
                        !email.main.value ||
                        !phone.main.value
                      }
                    />
                  </tr>
                </tr>
              </tfoot>
            </table>
          </form>
        )}
      </section>
    )
  )
}

export default AddUser
