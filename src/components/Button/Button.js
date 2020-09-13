import React from 'react'
import classNames from 'classnames'

import styles from './Button.module.scss'

const Button = ({ type, text, onClick, isDisabled }) => {
  return (
    <button
      type={type}
      className={classNames(styles.button, isDisabled && styles.disabled)}
      onClick={() => onClick()}
    >
      {text}
    </button >
  )
}

export default Button
