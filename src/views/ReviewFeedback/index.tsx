import { useContext, useState } from 'react'
import Button from '../../components/Button'
import Feedbacks from '../../components/Feedbacks'
import NoFeedBacks from '../../components/NoFeedbacks'
import { AccountContext } from '../../context/AccountProvider'
import { QuestionContext, SubmittedData } from '../../context/QuestionProvider'
import MainLayout from '../../layouts/MainLayout'
import { formatMonthYear } from '../../utils/format-month-year'
import styles from './reviewFeedback.module.css'

const applySort = (list: any[]) => {
  const comparator = (a: any, b: any) =>
    Number(new Date(a.date)) - Number(new Date(b.date))
  return list.sort(comparator)
}

const sortedOptions = (list: any) => {
  // Returns::: [{date: 'September 2022'}, {date: 'August 2022'}]
  const getDateList = list.reduce((acc: any[], curr: { date: string }) => {
    const formattedDate = formatMonthYear(curr.date)

    return acc.some((i) => i.date === formattedDate)
      ? acc
      : [...acc, { date: formattedDate }]
  }, [])
  // Sort date
  return applySort(getDateList)
}

const applyFilteredList = (
  list: any,
  selectedDate: string,
): SubmittedData[] => {
  if (selectedDate === 'all') {
    return list
  }
  return list.filter(
    (item: { date: string }) => formatMonthYear(item.date) === selectedDate,
  )
}

const ReviewFeedback = () => {
  const currentUser = useContext(AccountContext)
  const { feedbackList } = useContext(QuestionContext)
  const [selectedDate, setSelectedDate] = useState('all')

  const feedbacks = feedbackList.filter(
    (feed) => feed.from.id === currentUser?.id,
  )

  const options = sortedOptions(feedbacks)

  const filteredList = applyFilteredList(feedbacks, selectedDate)

  return (
    <MainLayout loggedIn>
      {feedbacks.length ? (
        <>
          <div className={styles.header}>
            <h1>My Feedback</h1>
            <div>
              <p className={styles.subtitle}>Feedback Period</p>
              <div className={styles.toptool}>
                <select
                  name="period"
                  className={styles.selectPeriod}
                  defaultValue={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                >
                  <option value="all">All</option>
                  {options.map((op, index) => (
                    <option key={index} value={op.date}>
                      {op.date}
                    </option>
                  ))}
                </select>
                <Button onClick={() => {}}>Publish Feedback</Button>
              </div>
            </div>
          </div>
          {filteredList.length && (
            <Feedbacks feedbacks={filteredList} identify="to" />
          )}
        </>
      ) : (
        <NoFeedBacks />
      )}
    </MainLayout>
  )
}

export default ReviewFeedback
