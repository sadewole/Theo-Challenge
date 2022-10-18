import * as React from 'react'
import { UserContext } from '../../context/UserProvider'
import MainLayout from '../../layouts/MainLayout'
import User from '../../components/User'
import Button from '../../components/Button'
import styles from './giveFeedback.module.css'
import { UserT } from '../../context/types'
import FeedbackForm from '../../components/FeedbackForm'

const GiveFeedback = () => {
  const users = React.useContext(UserContext)
  const [fillOut, setFillOut] = React.useState(false)
  const [fillUser, setFillUser] = React.useState<null | UserT>(null)

  const handleFillOut = (user: null | UserT) => {
    setFillOut((prev) => !prev)
    setFillUser(user)
  }

  return (
    <MainLayout loggedIn>
      <div className={styles.wrapper}>
        {fillOut ? (
          <FeedbackForm user={fillUser!} />
        ) : (
          <>
            {' '}
            <h1>Share Feedback</h1>
            {users && users.length > 0 && (
              <ul className={styles.users}>
                {users.map((user) => (
                  <li key={user.id} className={styles.user}>
                    <User
                      name={user.name}
                      avatarUrl={user.avatarUrl}
                      showName
                    />
                    <span style={{ flex: 1 }} />
                    <Button onClick={() => handleFillOut(user)}>
                      Fill out
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </MainLayout>
  )
}

export default GiveFeedback
