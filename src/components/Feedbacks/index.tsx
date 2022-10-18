import User from '../User'
import styles from './feedbacks.module.css'
import classnames from 'classnames'
import Scale from './components/Scale'
import { SubmittedData } from '../../context/QuestionProvider'
import { useState } from 'react'
import Skipped from './components/Skipped'
import { isNotNumber, isObject } from '../../utils/valueIdentify'

type Option = { value: string; label: string }

const Feedbacks = ({
  feedbacks,
  identify,
}: {
  feedbacks: SubmittedData[]
  identify: 'from' | 'to'
}) => {
  const [selectedUser, setSelectedUser] = useState(feedbacks[0])

  return (
    <div className={styles.feedbackContainer}>
      <ul className={styles.users}>
        <li>
          <h3
            className={classnames(
              styles.subtitleRegular,
              styles.textBlackPearl,
            )}
          >
            Feedback given
          </h3>
        </li>
        {feedbacks.map((feed, index: number) => (
          <li
            key={index}
            className={classnames(styles.user, {
              [styles.userSelected]:
                feed[identify].id === selectedUser[identify].id,
            })}
            onClick={() => setSelectedUser(feed)}
          >
            <User
              name={feed[identify].name}
              avatarUrl={feed[identify].avatarUrl}
              showName
            />
          </li>
        ))}
      </ul>

      <div className={styles.feedback}>
        <h2>{selectedUser.to.name}'s Feedback</h2>

        <table>
          <tbody>
            {Object.entries(selectedUser.feedback).map(([_, v], index) => {
              return (
                <tr key={index}>
                  <td>{v.ques}</td>
                  <td>
                    {isObject(v.ans) ? (
                      (v.ans as Option).label
                    ) : !v.ans ? (
                      <Skipped />
                    ) : !isNotNumber(v.ans) ? (
                      <Scale count={Number(v.ans)} />
                    ) : (
                      v.ans
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Feedbacks
