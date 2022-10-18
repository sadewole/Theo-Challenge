import { useContext } from 'react'
import Button from '../../components/Button'
import Feedbacks from '../../components/Feedbacks'
import NoFeedBacks from '../../components/NoFeedbacks'
import { AccountContext } from '../../context/AccountProvider'
import { QuestionContext } from '../../context/QuestionProvider'
import MainLayout from '../../layouts/MainLayout'
import styles from './reviewFeedback.module.css'

const ReviewFeedback = () => {
  const currentUser = useContext(AccountContext)
  const { feedbackList } = useContext(QuestionContext)

  const feedbacks = feedbackList.filter(
    (feed) => feed.from.id === currentUser?.id,
  )

  return (
    <MainLayout loggedIn>
      {feedbacks.length ? (
        <>
          <div className={styles.header}>
            <h1>My Feedback</h1>
            <div>
              <p className={styles.subtitle}>Feedback Period</p>
              <div className={styles.toptool}>
                <select name="" id="" className={styles.selectPeriod}>
                  <option value="">All</option>
                  <option value="">October 2018</option>
                  <option value="">November 2018</option>
                </select>
                <Button onClick={() => {}}>Publish Feedback</Button>
              </div>
            </div>
          </div>
          <Feedbacks feedbacks={feedbacks} identify="to" />
        </>
      ) : (
        <NoFeedBacks />
      )}
    </MainLayout>
  )
}

export default ReviewFeedback
