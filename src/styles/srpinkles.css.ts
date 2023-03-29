import {defineProperties, createSprinkles} from '@vanilla-extract/sprinkles'

import { vars } from './themes.css'

const colorProperties = defineProperties({
	conditions:{
		lightMode:{},
		darkMode:{
			'@media': '(prefers-color-scheme: dark)'
		},
	},
	defaultCondition: ['lightMode', 'darkMode'],
	properties: {
		backgroundColor: vars.colors,
		color: vars.colors
	}
})

const space = {
	none: 'none',
	small: '4px',
	medium: '8px',
	large: '16px',
	xlarge: '32px',
	xxlarge: '64px'
}

const spaceProperties = defineProperties({
	conditions:{
		mobile: {},
		tablet: {'@media': 'screen and ( min-width: 768px)'},
		desktop: { '@media': 'screen and (min-width: 1024px)'}
	},
	defaultCondition: 'mobile',
	properties:{
		margin: space,
		padding: space,
		width: ['30%', '50%', '80%']
	}
})

export const sprinkles = createSprinkles(colorProperties, spaceProperties)