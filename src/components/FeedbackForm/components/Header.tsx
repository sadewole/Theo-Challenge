import User from '../../User'
import styles from '../feedbackform.module.css'

type Props = {
  user: { name: string; avatarUrl?: string }
  title: string
}

const Header = ({ title, user }: Props) => {
  return (
    <div className={styles.header}>
      <div>
        <h1>{title}</h1>
        <p className={styles.subtitle}>share your feedback for {user.name}</p>
      </div>
      <User name={user.name} avatarUrl={user.avatarUrl} />
    </div>
  )
}

export default Header
