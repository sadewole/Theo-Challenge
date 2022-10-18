import { useState } from 'react'
import styles from './choice.module.css'
import classnames from 'classnames'

interface Option {
  value: number
  label: string
}

type Props = {
  options: Option[] | undefined
}

const ChoiceSelect = ({ options = [] }: Props) => {
  const [current, setCurrent] = useState({} as Option)

  const onChange = (option: Option) => {
    setCurrent(option)
  }

  return (
    <div>
      {options.map((option) => (
        <div
          key={option.value}
          className={classnames(styles.wrapper, {
            [styles.wrapperSelected]: current.value === option.value,
          })}
        >
          <input
            id={`${option.value}-option`}
            type="radio"
            name="choice"
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
