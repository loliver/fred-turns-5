import * as styles from './App.css'

import { PartyMap } from './map'

function App() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Fred turns 5!</h1>
      <h2>Where?</h2>
      <PartyMap />
    </div>
  )
}

export default App
