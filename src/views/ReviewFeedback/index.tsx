import * as React from 'react'
import Feedbacks from '../../components/Feedbacks'
import MainLayout from '../../layouts/MainLayout'
import styles from './reviewFeedback.module.css'

const ReviewFeedback = () => {
  return (
    <MainLayout loggedIn>
      <h1>Review Feedback Given</h1>
      <Feedbacks />
    </MainLayout>
  )
}

export default ReviewFeedback
