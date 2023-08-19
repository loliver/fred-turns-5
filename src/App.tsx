import * as styles from './App.css'

import { Masthead } from './masthead'
import { Content } from './content'

function App() {
  return (
    <div className={styles.wrapper}>
      <Masthead />
      <Content />
    </div>
  )
}

export default App
