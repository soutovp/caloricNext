import { vars } from '@/styles/themes.css'
import { style } from '@vanilla-extract/css'
export const ButtonArrow = style({
	margin:'10px',
	position:'fixed',
	padding:'25px',
	background:'none',
	border:'none',
	color:vars.colors.labelColor,
	fontSize:'25px',
	':hover':{
		cursor: 'pointer'
	}
})