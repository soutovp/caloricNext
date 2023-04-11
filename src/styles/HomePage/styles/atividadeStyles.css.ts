import { sprinkles } from '@/styles/srpinkles.css'
import { vars } from '@/styles/themes.css'
import { style } from '@vanilla-extract/css'
export const atividadeStyles = style([
	sprinkles({
		padding:{
			mobile:'large',
			tablet: 'large',
			desktop: 'large'
		}
	}),
	{
		color: vars.colors.inputTextColor
	}
])