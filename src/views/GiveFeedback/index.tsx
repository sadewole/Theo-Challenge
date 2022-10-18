import * as React from 'react'
import { useHistory } from 'react-router-dom'
import {
  DispatchQuestionContext,
  QuestionContext,
} from '../../context/QuestionProvider'
import { UserContext } from '../../context/UserProvider'
import MainLayout from '../../layouts/MainLayout'
import User from '../../components/User'
import Button from '../../components/Button'
import styles from './giveFeedback.module.css'
import { UserT } from '../../context/types'
import { AccountContext } from '../../context/AccountProvider'

const GiveFeedback = () => {
  const history = useHistory()
  const currentUser = React.useContext(AccountContext)
  const users = React.useContext(UserContext)
  const questionDispatch = React.useContext(DispatchQuestionContext)
  const { feedbackList } = React.useContext(QuestionContext)

  const handleFillOut = (user: UserT) => {
    questionDispatch({
      action: 'fieldUser',
      payload: user,
    })

    return history.push('/share-feedback/fill-out')
  }

  const filteredUser =
    users &&
    users
      .filter((user) => user.id !== currentUser?.id)
      .map((user) => {
        const isSubmitted = feedbackList.find(
          (feed) => feed.from.id === currentUser?.id && feed.to.id === user.id,
        )
        return { ...user, submitted: !!isSubmitted }
      })

  return (
    <MainLayout loggedIn>
      <div className={styles.wrapper}>
        <h1>Share Feedback</h1>
        {filteredUser && filteredUser.length > 0 && (
          <ul className={styles.users}>
            {filteredUser.map((user) => (
              <li key={user.id} className={styles.user}>
                <User name={user.name} avatarUrl={user.avatarUrl} showName />
                <span style={{ flex: 1 }} />
                <Button
                  onClick={() => handleFillOut(user)}
                  secondary={user.submitted}
                >
                  {!user.submitted ? 'Fill out' : 'View Submissions'}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </MainLayout>
  )
}

export default GiveFeedback
