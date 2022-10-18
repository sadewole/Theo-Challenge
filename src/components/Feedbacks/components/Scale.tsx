import styles from './scale.module.css'
import classnames from 'classnames'

const Scale = ({ count }: { count: number }) => {
  return (
    <div className={styles.scaleWrapper}>
      {new Array(10).fill('').map((_, i: number) => (
        <div
          key={i}
          className={classnames(styles.scale, {
            [styles.readScale]: i < count,
          })}
        />
      ))}
    </div>
  )
}

export default Scale
