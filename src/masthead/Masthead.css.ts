import { style } from '@vanilla-extract/css'

export const mastheadWrapper = style({
  position: 'relative',
  height: '600px',
  overflowX: 'visible',
})

export const earth = style({
  width: '450px',
  position: 'absolute',
  top: '-150px',
  right: '-150px'
})

export const fredstronaut = style({
  position: 'absolute',
  left: '-50px',
  bottom: '50px',
  transform: 'rotate(10deg)',
  width: '300px',
  maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 90%, rgba(0, 0, 0, 0) 100%)',
})

export const spaceship = style({
  width: '150px',
  position: 'absolute',
  right: '0',
  bottom: '150px',
})

export const spaceship2 = style({
  width: '80px',
  position: 'absolute',
  left: '-60px',
  bottom: '-750px',
})

export const mars = style({
  width: '400px',
  position: 'absolute',
  right: '-250px',
  bottom: '-750px',
})