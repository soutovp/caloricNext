import { style } from '@vanilla-extract/css'
import { sprinkles } from '../../../styles/srpinkles.css'
import { vars } from '@/styles/themes.css'

export const Logo = style(
	{
		display:'flex',
		flexDirection: 'column',
		margin: '25px 0'
	}
)

export const Calculadora = style({
	color: vars.colors.inputTextColor
})

export const Calorica = style({
	color: vars.colors.inputButton
})