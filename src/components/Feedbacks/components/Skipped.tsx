import styles from '../feedbacks.module.css'
import classnames from 'classnames'

const Skipped = () => {
  return (
    <span className={classnames(styles.skipBadge, styles.subtitleRegular)}>
      skipped
    </span>
  )
}

export default Skipped
