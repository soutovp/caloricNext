import { style } from '@vanilla-extract/css'
import { sprinkles } from '../../srpinkles.css'
import { vars } from '../../themes.css'

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