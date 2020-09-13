import React from 'react'
import { useSelector } from 'react-redux'

import styles from './UserInfo.module.scss'

const UserInfo = () => {
  const userId = useSelector((state) => state.userId)
  const user = useSelector((state) => state.users.entities.find(({ _id }) => _id === userId))

  return (
    <section>
      {user && (
        <>
          <p>User <b>{user.firstName} {user.lastName}</b> was chosen</p>
          <p>Description:</p>
          <textarea className={styles.textarea} value={user.description}></textarea>
          <p>Address: <b>{user.address?.streetAddress}</b></p>
          <p>City: <b>{user.address?.city}</b></p>
          <p>State: <b>{user.address?.state}</b></p>
          <p>Zip: <b>{user.address?.zip}</b></p>
        </>
      )}
    </section >
  )
}

export default UserInfo
