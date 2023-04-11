import { style } from '@vanilla-extract/css'

export const Button = style({
	background: 'none',
	border: 'none',
	position: 'fixed',
	right: '25px',
	top: '25px',
	':hover':{
		cursor: 'pointer'
	}
})