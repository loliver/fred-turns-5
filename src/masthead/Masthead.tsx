import * as styles from './Masthead.css'
import globe from '/globe.png'
import fredstronaut from '/space-fred.png'
import spaceship from '/alien.png'
import mars from '/mars.png'

export const Masthead = () => (
  <div className={styles.mastheadWrapper}>
    <img src={globe} className={styles.earth} />
    <img src={fredstronaut} className={styles.fredstronaut} />
    <img src={spaceship} className={styles.spaceship} />
    <img src={spaceship} className={styles.spaceship2} />
    <img src={mars} className={styles.mars} />
  </div>
)
