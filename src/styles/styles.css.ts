import { globalStyle} from '@vanilla-extract/css'
import { vars } from './themes.css'

globalStyle('html, body, h1', {
	margin: 0,
	padding: 0,
	boxSizing: 'border-box',
	backgroundColor: vars.colors.appBackground,
	color: vars.colors.labelColor
})