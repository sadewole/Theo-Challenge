import React from 'react'
import { QuestionContext } from '../../context/QuestionProvider'
import Button from '../Button'
import Header from './components/Header'
import Ratings from './components/Ratings'
import styles from './feedbackform.module.css'
import classnames from 'classnames'
import ChoiceSelect from './components/ChoiceSelect'

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

  const progressWidth = questions ? 100 * ((current + 1) / questions.length) : 0

  return (
    <div className={styles.wrapper}>
      {questions ? (
        <div>
          <Header title={questions[current].label} user={user} />
          <div className={styles.content}>
            <div>
              {questions[current].type === 'scale' ? (
                <Ratings />
              ) : questions[current].type === 'text' ? (
                <textarea
                  rows={10}
                  className={styles.textarea}
                  placeholder="Say something"
                />
              ) : (
                <ChoiceSelect options={questions[current].options} />
              )}
            </div>
            <div className={styles.footerButton}>
              <Button onClick={handlePrev} disabled={current === 0} secondary>
                Previous
              </Button>
              {questions[current].required && (
                <Button onClick={handleNext} secondary>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext} disabled={false}>
                Next
              </Button>
            </div>
            <div>
              <div className={styles.progressBarWrapper}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${progressWidth}%` }}
                />
              </div>
              <p
                className={classnames(
                  styles.subtitleRegular,
                  styles.textBlackPearl,
                )}
              >
                Questions Completed
              </p>
              <p className={styles.textBlackPearl}>
                {current + 1}/{questions.length}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default FeedbackForm
