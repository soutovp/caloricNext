import { sprinkles } from '@/styles/srpinkles.css'
import { vars } from '@/styles/themes.css'
import { style, createTheme } from '@vanilla-extract/css'

export const ContainerInput = style([
	sprinkles({
		width:{
			mobile:'80%',
			tablet: '50%',
			desktop: '30%'
		},
	}),
	{
		margin: `${vars.space.large} 0`,
		color:vars.colors.labelColor,
		display: 'flex',
		flexDirection: 'column'
	}
])

export const SInputRange = style([
	sprinkles({
	}),
	{
		margin: `${vars.space.large} 0`,
		appearance: 'none',
		width: '100%',
		':focus':{
			outline: 'none'
		},
		backgroundColor: 'transparent',
		padding: '0 5px',
		'::-webkit-slider-thumb':{
			appearance: 'none',
			display:'block',
			width: '16px',
			height: '16px',
			backgroundColor: vars.colors.inputTextColor,
			borderRadius: '50%'
		},
		'::-moz-range-thumb':{
			appearance: 'none',
			display:'block',
			width: '16px',
			height: '16px',
			backgroundColor: vars.colors.inputTextColor,
			borderRadius: '50%'
		}
	}
])

function createStyle(arg0: { backgroundColor: string; height: string; borderRadius: string }) {
	throw new Error('Function not implemented.')
}
