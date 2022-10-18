import styles from './choice.module.css'
import classnames from 'classnames'

interface Option {
  value: number
  label: string
}

type Props = {
  options: Option[] | undefined
  setField: (e: any) => void
  field: any
}

const ChoiceSelect = ({ setField, field, options = [] }: Props) => {
  const onChange = (option: Option) => {
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
