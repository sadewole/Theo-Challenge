import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { DispatchQuestionContext } from '../../context/QuestionProvider'
import { UserContext } from '../../context/UserProvider'
import MainLayout from '../../layouts/MainLayout'
import User from '../../components/User'
import Button from '../../components/Button'
import styles from './giveFeedback.module.css'
import { UserT } from '../../context/types'

const GiveFeedback = () => {
  const history = useHistory()
  const users = React.useContext(UserContext)
  const questionDispatch = React.useContext(DispatchQuestionContext)

  const handleFillOut = (user: UserT) => {
    questionDispatch({
      action: 'fieldUser',
      payload: user,
    })

    return history.push('/share-feedback/fill-out')
  }

  return (
    <MainLayout loggedIn>
      <div className={styles.wrapper}>
        <h1>Share Feedback</h1>
        {users && users.length > 0 && (
          <ul className={styles.users}>
            {users.map((user) => (
              <li key={user.id} className={styles.user}>
                <User name={user.name} avatarUrl={user.avatarUrl} showName />
                <span style={{ flex: 1 }} />
                <Button onClick={() => handleFillOut(user)}>Fill out</Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </MainLayout>
  )
}

export default GiveFeedback
