import React, { useEffect, useState } from 'react'
import { QuestionT } from '../../../context/QuestionProvider'
import Button from '../../../components/Button'
import ChoiceSelect from './ChoiceSelect'
import Ratings from './Ratings'

import styles from '../feedbackform.module.css'

type Props = {
  question: QuestionT
  handlePrev: () => void
  handleUpdateFormState: (e: any) => void
  handleSubmitForm: (e: any) => void
  current: number
  formState: any
  showSubmit?: boolean
}

const FieldArea = ({
  question,
  handlePrev,
  handleUpdateFormState,
  current,
  formState,
  showSubmit,
  handleSubmitForm,
}: Props) => {
  const [field, setField] = useState('')
  const [multiField, setMultiField] = useState<any>({})

  useEffect(() => {
    if (question.type === 'multipleChoice') {
      setMultiField(formState[question.id]?.ans)
    } else {
      setField(formState[question.id]?.ans)
    }
  }, [formState, question.id, question.type])

  const resetField = () => {
    setField('')
    setMultiField(null)
  }

  const handleSkipped = () => {
    handleUpdateFormState('')
    resetField()
  }

  const handleNext = () => {
    const data = question.type === 'multipleChoice' ? multiField : field
    handleUpdateFormState(data)
    resetField()
  }
  const handleSubmit = () => {
    const data = question.type === 'multipleChoice' ? multiField : field
    handleSubmitForm(data)
    resetField()
  }

  const disableNext =
    question.type !== 'multipleChoice' ? !field : !multiField?.value

  return (
    <>
      <div>
        {question.type === 'scale' ? (
          <Ratings field={field} setField={setField} />
        ) : question.type === 'text' ? (
          <textarea
            rows={10}
            className={styles.textarea}
            placeholder="Say something"
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
        ) : (
          <ChoiceSelect
            options={question.options}
            field={multiField}
            setField={setMultiField}
          />
        )}
      </div>
      <div className={styles.footerButton}>
        {showSubmit ? (
          <Button onClick={handleSubmit} disabled={disableNext}>
            Submit
          </Button>
        ) : (
          <>
            {' '}
            <Button onClick={handlePrev} disabled={current === 0} secondary>
              Previous
            </Button>
            {question.required && (
              <Button onClick={handleSkipped} secondary>
                Skip
              </Button>
            )}
            <Button onClick={handleNext} disabled={disableNext}>
              Next
            </Button>
          </>
        )}
      </div>
    </>
  )
}

export default FieldArea
