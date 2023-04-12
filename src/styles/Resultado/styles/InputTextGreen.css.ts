import { Input } from '@/styles/HomePage/index.css'
import { vars } from '@/styles/themes.css'
import { style } from '@vanilla-extract/css'

export const InputTextGreen = style([
	Input,
	{
		fontWeight:700,
		fontSize:25,
		color:vars.colors.inputButton
	}
])