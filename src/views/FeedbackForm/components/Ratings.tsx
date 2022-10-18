import React from 'react'
import styles from './ratings.module.css'

type Props = {
  setField: (e: string) => void
  field: string
}

const Rating = ({ setField, field }: Props) => {
  const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setField(e.currentTarget.value)
  }

  return (
    <fieldset className={styles.fieldset}>
      <div className={styles.ratingWrapper}>
        <input
          id="one-rating"
          className={styles.ratingOne}
          type="radio"
          name="reviewRating"
          value="1"
          checked={field == '1'}
          onChange={onChange}
        />
        <label htmlFor="one-rating">1 Star</label>
        <input
          id="two-rating"
          className={styles.ratingTwo}
          type="radio"
          name="reviewRating"
          value="2"
          checked={field == '2'}
          onChange={onChange}
        />
        <label htmlFor="two-rating">2 Stars</label>
        <input
          id="three-rating"
          className={styles.ratingThree}
          type="radio"
          name="reviewRating"
          value="3"
          checked={field == '3'}
          onChange={onChange}
        />
        <label htmlFor="three-rating">3 Stars</label>
        <input
          id="four-rating"
          className={styles.ratingFour}
          type="radio"
          name="reviewRating"
          value="4"
          checked={field == '4'}
          onChange={onChange}
        />
        <label htmlFor="four-rating">4 Stars</label>
        <input
          id="five-rating"
          className={styles.ratingFive}
          type="radio"
          name="reviewRating"
          value="5"
          checked={field == '5'}
          onChange={onChange}
        />
        <input
          id="six-rating"
          className={styles.ratingSix}
          type="radio"
          name="reviewRating"
          value="6"
          checked={field == '6'}
          onChange={onChange}
        />
        <label htmlFor="six-rating">6 Stars</label>
        <input
          id="seven-rating"
          className={styles.ratingSeven}
          type="radio"
          name="reviewRating"
          value="7"
          checked={field == '7'}
          onChange={onChange}
        />
        <label htmlFor="seven-rating">7 Stars</label>
        <input
          id="eight-rating"
          className={styles.ratingEight}
          type="radio"
          name="reviewRating"
          value="8"
          checked={field == '8'}
          onChange={onChange}
        />
        <label htmlFor="eight-rating">8 Stars</label>
        <input
          id="nine-rating"
          className={styles.ratingNine}
          type="radio"
          name="reviewRating"
          value="9"
          checked={field == '9'}
          onChange={onChange}
        />
        <label htmlFor="nine-rating">9 Stars</label>
        <input
          id="ten-rating"
          className={styles.ratingTen}
          type="radio"
          name="reviewRating"
          value="10"
          checked={field == '10'}
          onChange={onChange}
        />
        <label htmlFor="ten-rating">10 Stars</label>
        <div className={styles.ratingDisplay}>
          {new Array(10).fill('').map((_, i: number) => (
            <div className={styles.rating} key={i} />
          ))}
        </div>
      </div>
      <p style={{ textAlign: 'right' }}>{field || 0}/10</p>
    </fieldset>
  )
}

export default Rating
