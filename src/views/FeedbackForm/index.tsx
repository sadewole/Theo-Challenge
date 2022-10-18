import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { QuestionContext } from '../../context/QuestionProvider'
import Header from './components/Header'
import styles from './feedbackform.module.css'
import classnames from 'classnames'
import FieldArea from './components/FieldArea'
import MainLayout from '../../layouts/MainLayout'

const FeedbackForm = () => {
  const history = useHistory()
  const { questions, currentFieldUser: user } = useContext(QuestionContext)
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
    <MainLayout loggedIn>
      <div className={styles.wrapper}>
        <button
          className={styles.backButton}
          onClick={() => history.push('/share-feedback')}
        >
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 11.7L6.66667 13L0 6.5L6.66667 0L8 1.3L2.70833 6.5L8 11.7Z"
              fill="#59636E"
            />
          </svg>
          <p
            className={classnames(
              styles.subtitleRegular,
              styles.textPrevGreyed,
              styles.backText,
            )}
          >
            Back
          </p>
        </button>
        {questions && user ? (
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
    </MainLayout>
  )
}

export default FeedbackForm
