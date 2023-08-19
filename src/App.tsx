import * as styles from './App.css'

import { Masthead } from './masthead'
import { Content } from './content'
import stars from '/stars.png'

function App() {
  document.documentElement.style.background = `linear-gradient(217deg, rgba(75, 75, 0, 1), rgba(75,75,0,0) 70.71%),
  linear-gradient(127deg, rgba(0,75,75,1), rgba(0,75,75,0) 70.71%),
  linear-gradient(336deg, rgba(75,0,75,1), rgba(75,0,75,0) 70.71%),
  url(${stars}) repeat`
  return (
    <div className={styles.wrapper}>
      <Masthead />
      <Content />
    </div>
  )
}

export default App
