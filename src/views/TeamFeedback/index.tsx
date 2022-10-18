import Feedbacks from '../../components/Feedbacks'
import MainLayout from '../../layouts/MainLayout'

const TeamFeedback = () => {
  return (
    <MainLayout loggedIn>
      <h1>My Feedback</h1>
      <Feedbacks />
    </MainLayout>
  )
}

export default TeamFeedback
