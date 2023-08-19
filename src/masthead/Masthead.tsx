import * as styles from './Masthead.css'

export const Masthead = () => (
  <div className={styles.mastheadWrapper}>
    <img src="/globe.png" className={styles.earth} />
    <img src="/space-fred.png" className={styles.fredstronaut} />
    <img src="/alien.png" className={styles.spaceship} />
    <img src="/alien.png" className={styles.spaceship2} />
    <img src="/mars.png" className={styles.mars} />
  </div>
)
