import { sprinkles } from '@/styles/srpinkles.css'
import { vars } from '@/styles/themes.css'
import { style } from '@vanilla-extract/css'
export const inputButton = style([
	sprinkles({
		padding:{
			mobile:'large',
			tablet: 'large',
			desktop: 'large'
		}
	}),
	{
		display: 'block',
		backgroundColor: vars.colors.inputButton,
		color: vars.colors.inputButtonText,
		fontSize: '16px',
		fontWeight: '600',
		width: '100%',
		border: 'none',
		boxShadow: '2px 2px 2px rgba(0,0,0,.05)',
		borderRadius: '5px',
		marginTop: '25px',
		':active':{
			backgroundColor: vars.colors.inputButtonActive,
			outline: `2px solid ${vars.colors.inputTextColor}`
		},
		'::selection':{
			border: `2px solid ${vars.colors.inputTextColor}`
		}
	}
])