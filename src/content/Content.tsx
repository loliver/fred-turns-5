import { PartyMap } from '../map'

import * as styles from './Content.css'

export const Content = () => (
  <>
    <h1 className={styles.heading}>Fred turns 5!</h1>
    <p>Come and join us for an afternoon of fun at <strong>Edwardes Lake Park</strong> to celebrate Freddie's 5th birthday!</p>
    <p>There will be snacks, a big playground, games and <strong>cake</strong>!</p>
    <h2>When?</h2>
    <p>Sunday the <strong>10th</strong> of September,<br /><strong>2pm to 4pm</strong>.</p>
    <h2>Where?</h2>
    <p><strong>Edwardes Lake Park</strong><br />
    Griffiths St &, Edwardes St, Reservoir VIC 3073</p>
    <PartyMap />
    <h2>RSVP</h2>
    <p>Let my Dad know if you can make it by <strong>September 5th</strong>!</p>
    <p>Contact Oliver via <br />email <a href="mailto:oliver.gassman@gmail.com" target="_blank">oliver.gassman@gmail.com</a> <br />or on mobile <a href="tel:0403163366" target="_blank">0403 16 33 66</a>.</p>
    <p><a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NjM3Mm5la2pldjlvOGptNTF0dGYxc2ZhZDIgZmFtaWx5MDQwNDYzMzE3MTM1MDIzOTEzMTZAZw&tmsrc=family04046331713502391316%40group.calendar.google.com" target="_blank">Add to your calendar.</a></p>
  </>
)
