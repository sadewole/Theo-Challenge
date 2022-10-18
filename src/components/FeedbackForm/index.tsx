import React from 'react'
import { QuestionContext } from '../../context/QuestionProvider'
import Button from '../Button'
import Header from './components/Header'
import styles from './feedbackform.module.css'

const FeedbackForm = ({
  user,
}: {
  user: { name: string; avatarUrl?: string }
}) => {
  const questions = React.useContext(QuestionContext)

  const [current, setCurrent] = React.useState(0)

  const handleNext = () => {
    if (questions && current < questions.length) {
      setCurrent(current + 1)
    }
  }
  const handlePrev = () => {
    if (current) {
      setCurrent(current - 1)
    }
  }

  return (
    <div className={styles.wrapper}>
      {questions ? (
        <div>
          <Header title={questions[current].label} user={user} />
          <div className={styles.content}>
            <div>content will be here</div>
            <div className={styles.footerButton}>
              <Button onClick={handlePrev} disabled={current === 0} secondary>
                Previous
              </Button>
              {questions[current].required && (
                <Button onClick={handleNext} secondary>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext} disabled={false} secondary>
                Next
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default FeedbackForm
