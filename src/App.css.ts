import { style, globalStyle } from '@vanilla-extract/css'
import stars from "../public/stars.png"

globalStyle(':root', {
  background: `linear-gradient(217deg, rgba(75, 75, 0, 0.8), rgba(75,75,0,0) 70.71%),
  linear-gradient(127deg, rgba(0,75,75,.8), rgba(0,75,75,0) 70.71%),
  linear-gradient(336deg, rgba(75,0,75,.8), rgba(75,0,75,0) 70.71%), url(${stars}) 0 center repeat`
})

export const wrapper = style({
  maxWidth: '980px',
})
