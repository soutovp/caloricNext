import { vars } from '@/styles/themes.css'
import { style } from '@vanilla-extract/css'

export const Label = style({
	display: 'block',
	color: vars.colors.labelColor,
	fontSize: '22px',
	fontWeight: '600',
})