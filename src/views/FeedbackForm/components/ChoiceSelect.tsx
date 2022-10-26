import styles from './choice.module.css'
import classnames from 'classnames'
import { OptionT } from '../../../context/types'

type Props<T> = {
  options?: T[]
  setField: (e: T) => void
  field: T
}

const ChoiceSelect = ({ setField, field, options = [] }: Props<OptionT>) => {
  const onChange = (option: OptionT) => {
    setField(option)
  }

  return (
    <div>
      {options.map((option) => (
        <div
          key={option.value}
          className={classnames(styles.wrapper, {
            [styles.wrapperSelected]: field?.value === option.value,
          })}
        >
          <input
            id={`${option.value}-option`}
            type="radio"
            name="choice"
            checked={field?.value === option.value}
            value={option.label}
            onChange={() => onChange(option)}
          />
          <label htmlFor={`${option.value}-option`} className={styles.label}>
            <span style={{ width: '80%' }}>{option.label}</span>
          </label>
        </div>
      ))}
    </div>
  )
}

export default ChoiceSelect
