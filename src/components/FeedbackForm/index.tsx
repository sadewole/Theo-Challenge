import { useContext, useState } from 'react'
import { QuestionContext } from '../../context/QuestionProvider'
import Header from './components/Header'
import styles from './feedbackform.module.css'
import classnames from 'classnames'
import FieldArea from './components/FieldArea'

const FeedbackForm = ({
  user,
}: {
  user: { name: string; avatarUrl?: string }
}) => {
  const questions = useContext(QuestionContext)
  const [current, setCurrent] = useState(0)
  const [formState, setFormState] = useState({})

  const handleNext = () => {
    if (questions && current < questions.length - 1) {
      setCurrent(current + 1)
    }
  }
  const handlePrev = () => {
    if (current) {
      setCurrent(current - 1)
    }
  }

  const progressWidth = questions ? 100 * ((current + 1) / questions.length) : 0

  const handleUpdateFormState = (val: any) => {
    if (questions) {
      setFormState((prev) => ({
        ...prev,
        [questions[current].id]: {
          id: questions[current].id,
          ques: questions[current].label,
          ans: val,
        },
      }))
      handleNext()
    }
  }

  const handleSubmitForm = (val: any) => {
    let data = {}
    if (questions)
      data = {
        ...formState,
        [questions[current].id]: {
          id: questions[current].id,
          ques: questions[current].label,
          ans: val,
        },
      }

    console.log('data:', data)
  }

  return (
    <div className={styles.wrapper}>
      {questions ? (
        <div>
          <Header title={questions[current].label} user={user} />
          <div className={styles.content}>
            <FieldArea
              question={questions[current]}
              formState={formState}
              handleUpdateFormState={handleUpdateFormState}
              handleSubmitForm={handleSubmitForm}
              handlePrev={handlePrev}
              current={current}
              showSubmit={current === questions.length - 1}
            />
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
