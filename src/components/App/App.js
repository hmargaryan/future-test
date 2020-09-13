import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import TableModeSelect from '../TableModeSelect/TableModeSelect'
import Search from '../Search/Search'
import Table from '../Table/Table'
import UserInfo from '../UserInfo/UserInfo'
import AddUser from '../AddUser/AddUser'

import styles from './App.module.scss'

const App = () => {
  return (
    <Provider store={store}>
      <main role="main" className={styles.container}>
        <h1 className="visually-hidden">Future test</h1>
        <TableModeSelect />
        <Search />
        <AddUser />
        <Table />
        <UserInfo />
      </main>
    </Provider>
  )
}

export default App
