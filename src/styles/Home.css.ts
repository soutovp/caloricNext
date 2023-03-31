import { style } from '@vanilla-extract/css'
import { sprinkles } from './srpinkles.css'
import { vars } from './themes.css'

export const Form = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
})

export const Container = style([
	sprinkles({
		width:{
			mobile:'80%',
			tablet: '50%',
			desktop: '30%'
		},
	}),
	{
		flex: 'auto',
		display: 'block',
		alignItems: 'center',
		flexDirection: 'column',
		padding: vars.space.medium,
	}
])

export const H1 = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
})

export const Label = style({
	display: 'block',
	color: vars.colors.labelColor,
	fontSize: '22px',
	fontWeight: '600',
})

export const input = style([
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
		':focus':{
			outline: `2px solid ${vars.colors.inputTextColor}`
		},
	},
])

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
		width: '100%',
		border: 'none',
		boxShadow: '2px 2px 2px rgba(0,0,0,.05)',
		borderRadius: '5px',
		':active':{
			backgroundColor: vars.colors.inputButtonActive
		}
	}
])