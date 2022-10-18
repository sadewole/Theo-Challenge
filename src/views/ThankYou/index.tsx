import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import User from '../../components/User'
import { AccountContext } from '../../context/AccountProvider'
import {
  DispatchQuestionContext,
  QuestionContext,
} from '../../context/QuestionProvider'
import { UserT } from '../../context/types'
import { UserContext } from '../../context/UserProvider'
import MainLayout from '../../layouts/MainLayout'
import styles from './thankyou.module.css'

const ThankYou = () => {
  const history = useHistory()
  const currentUser = useContext(AccountContext)
  const users = useContext(UserContext)
  const questionDispatch = useContext(DispatchQuestionContext)
  const { feedbackList } = useContext(QuestionContext)

  const handleFillOut = (user: UserT) => {
    questionDispatch({
      action: 'fieldUser',
      payload: user,
    })

    return history.push('/share-feedback/fill-out')
  }

  const filteredUser =
    users &&
    users.filter((user) => {
      if (user.id !== currentUser?.id) {
        const isSubmitted = feedbackList.find(
          (feed) => feed.from.id === currentUser?.id && feed.to.id === user.id,
        )

        return !isSubmitted
      }

      return false
    })

  return (
    <MainLayout loggedIn>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h1>Thank you for sharing your feedback!</h1>
          <p className={styles.subtitle}>
            Continue to give feedback to other team members.
          </p>
        </div>
        {filteredUser && filteredUser.length > 0 && (
          <ul className={styles.users}>
            {filteredUser.map((user) => (
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

export default ThankYou
