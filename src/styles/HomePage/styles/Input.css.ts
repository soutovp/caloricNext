import { sprinkles } from '@/styles/srpinkles.css'
import { vars } from '@/styles/themes.css'
import { style } from '@vanilla-extract/css'

export const Input = style([
	sprinkles({
		padding:{
			mobile:'large',
			tablet: 'large',
			desktop: 'large'
		}
	}),
	{
		color: vars.colors.inputTextColor,
		backgroundColor: vars.colors.inputBackground,
		margin: `${vars.space.medium} 0 0 0`,
		border: 'none',
		boxShadow: '2px 2px 2px rgba(0,0,0,.05)',
		borderRadius: '5px',
		fontSize: '16px',
		fontWeight: '400',
		width:'100%',
		boxSizing: 'border-box',
		'WebkitAppearance': 'textfield',
		'MozAppearance': 'textfield',
		appearance:'textfield',
		':focus':{
			outline: `2px solid ${vars.colors.inputTextColor}`
		}
	},
])