import * as styles from './App.css'

import { Content } from './content'
import { PartyMap } from './map'

function App() {
  return (
    <div className={styles.wrapper}>
      <Content />
      <PartyMap />
    </div>
  )
}

export default App
