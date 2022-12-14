import { NavLink } from 'react-router-dom'
import styles from './header.module.css'
import * as React from 'react'
import {
  AccountContext,
  DispatchAccountContext,
} from '../../context/AccountProvider'
import User from '../../components/User'

const Header = () => {
  const currentUser = React.useContext(AccountContext)
  const logoutUser = React.useContext(DispatchAccountContext)

  const handleLogout = () => {
    logoutUser({ action: 'logout' })
  }

  return (
    <div className={styles.header}>
      <h1>Honesto</h1>
      <NavLink to="/share-feedback" activeClassName={styles.active}>
        Share Feedback
      </NavLink>
      <NavLink exact to="/my-feedback" activeClassName={styles.active}>
        My Feedback
      </NavLink>
      <NavLink exact to="/team-feedback" activeClassName={styles.active}>
        Team Feedback
      </NavLink>
      <span className={styles.spacer} />
      {currentUser && (
        <div className={styles.logout}>
          <User name={currentUser.name} avatarUrl={currentUser.avatarUrl} />
          <div>
            <p>{currentUser.name}</p>
            <NavLink exact to="/" onClick={handleLogout}>
              Logout
            </NavLink>
          </div>
        </div>
      )}
    </div>
  )
}
export default Header
