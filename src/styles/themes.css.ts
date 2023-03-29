import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css'

export const vars = createThemeContract({
	colors:{
		appBackground: '',
		inputBackground: '',
		inputTextColor: '',
		labelColor: ''
	},
	space:{
		none: '',
		small: '',
		medium: '',
		large: '',
		xlarge: '',
		xxlarge: ''
	}
})

export const theme = createGlobalTheme(':root', vars,{
	colors:{
		appBackground: '#F4F6FB',
		inputBackground: '#FFFFFF',
		inputTextColor: '#9627A8',
		labelColor: '#000000'
	},
	space:{
		none: 'none',
		small: '4px',
		medium: '8px',
		large: '16px',
		xlarge: '32px',
		xxlarge: '64px'
	}
})

export const lightTheme = createTheme(vars,{
	colors:{
		appBackground: '#F4F6FB',
		inputBackground: '#FFFFFF',
		inputTextColor: '#9627A8',
		labelColor: '#000000'
	},
	space:{
		none: 'none',
		small: '4px',
		medium: '8px',
		large: '16px',
		xlarge: '32px',
		xxlarge: '64px'
	}
})

export const darkTheme = createTheme(vars,{
	colors: {
		appBackground: '#1D191E',
		inputBackground: '#2E2C2C',
		inputTextColor: '#9E60A8',
		labelColor: '#FFFFFF'
	},
	space:{
		none: 'none',
		small: '4px',
		medium: '8px',
		large: '16px',
		xlarge: '32px',
		xxlarge: '64px'
	}
})