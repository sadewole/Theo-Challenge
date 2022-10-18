import Button from '../../components/Button'
import Feedbacks from '../../components/Feedbacks'
import MainLayout from '../../layouts/MainLayout'
import styles from './reviewFeedback.module.css'

const ReviewFeedback = () => {
  return (
    <MainLayout loggedIn>
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
      <Feedbacks />
    </MainLayout>
  )
}

export default ReviewFeedback
