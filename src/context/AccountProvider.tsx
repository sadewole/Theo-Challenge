import * as React from 'react'
import { UserT } from './types'

type DispatchAccountContextT = any

export const DispatchAccountContext =
  React.createContext<DispatchAccountContextT | null>(null)
export const AccountContext = React.createContext<UserT | null>(null)

type FetchAccountT = {
  action: 'fetchAccount'
}

type LoginAccountT = {
  action: 'login'
  payload: UserT
}

type LogoutAccountT = {
  action: 'logout'
}

const reducer = (
  state: UserT | null,
  update: LoginAccountT | LogoutAccountT | FetchAccountT,
): UserT | null => {
  if (update.action === 'login') {
    localStorage.setItem('user:logged', JSON.stringify(update.payload))
    return update.payload
  } else if (update.action === 'logout') {
    console.log('logout')
    localStorage.removeItem('user:logged')
    return null
  } else if (update.action === 'fetchAccount') {
    let currentUser = null
    const getLoggedUser = localStorage.getItem('user:logged')
    if (getLoggedUser) {
      currentUser = JSON.parse(getLoggedUser) as UserT
    }
    return currentUser
  }
  return state
}

const UIProvider = ({ children }: { children: React.ReactNode }): any => {
  const [state, dispatch] = React.useReducer(reducer, null)

  React.useEffect(() => {
    dispatch({
      action: 'fetchAccount',
    })
  }, [])

  console.log('account', state)

  return (
    <DispatchAccountContext.Provider value={dispatch}>
      <AccountContext.Provider value={state}>
        {children}
      </AccountContext.Provider>
    </DispatchAccountContext.Provider>
  )
}

export default UIProvider
