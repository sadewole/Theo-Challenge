import React from 'react'
import styles from './nofeedbacks.module.css'

const NoFeedBacks = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>No feedback to display 🔮</h3>
        <p>
          There is no feedback to display at this time – check back in a bit!
        </p>
      </div>
    </div>
  )
}

export default NoFeedBacks
