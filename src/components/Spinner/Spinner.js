import React from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import styles from './Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <span className={styles.label}>Loading</span>
      <Loader
        type='ThreeDots'
        color='#000000'
        height={30}
        width={30}
      />
    </div>
  )
}

export default Spinner
