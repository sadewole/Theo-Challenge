import { useContext } from 'react'
import Feedbacks from '../../components/Feedbacks'
import NoFeedBacks from '../../components/NoFeedbacks'
import { AccountContext } from '../../context/AccountProvider'
import { QuestionContext } from '../../context/QuestionProvider'
import MainLayout from '../../layouts/MainLayout'

const TeamFeedback = () => {
  const currentUser = useContext(AccountContext)
  const { feedbackList } = useContext(QuestionContext)

  const feedbacks = feedbackList.filter(
    (feed) => feed.to.id === currentUser?.id,
  )

  return (
    <MainLayout loggedIn>
      {feedbacks.length ? (
        <>
          <h1>Team Feedback</h1>
          <Feedbacks feedbacks={feedbacks} identify="from" />
        </>
      ) : (
        <NoFeedBacks />
      )}
    </MainLayout>
  )
}

export default TeamFeedback
