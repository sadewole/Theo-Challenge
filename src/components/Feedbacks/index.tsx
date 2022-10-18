import User from '../User'
import styles from './feedbacks.module.css'
import classnames from 'classnames'
import Scale from './components/Scale'

const Feedbacks = () => {
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
        <li
          className={classnames(styles.user, { [styles.userSelected]: true })}
        >
          <User name="John Doe" />
        </li>
      </ul>

      <div className={styles.feedback}>
        <h2>John Doe's Feedback</h2>

        <table>
          <tbody>
            <tr>
              <td>
                How much do you trust this person to deliver high quality work?
              </td>
              <td>
                <Scale count={6} />
              </td>
            </tr>
            <tr>
              <td>
                Is this person up to date with the latest accounting
                regulations?
              </td>
              <td>Yes, you are reasonably up to date with new regulations.</td>
            </tr>
            <tr>
              <td>
                How well does this person understand the technical domain of our
                product?
              </td>
              <td>
                {' '}
                <Scale count={8} />
              </td>
            </tr>
            <tr>
              <td>
                Is this person up to date with the latest accounting
                regulations?
              </td>
              <td>
                <span
                  className={classnames(
                    styles.skipBadge,
                    styles.subtitleRegular,
                  )}
                >
                  skipped
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Feedbacks
