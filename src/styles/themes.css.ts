import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css'

export const vars = createThemeContract({
	colors:{
		appBackground: '',
		inputBackground: '',
		inputTextColor: '',
		inputButton: '',
		inputButtonText: '',
		inputButtonActive: '',
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
		inputButton: '#39A827',
		inputButtonText: '#FFFFFF',
		inputButtonActive: '#2F8521',
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
		inputButton: '#39A827',
		inputButtonText: '#FFFFFF',
		inputButtonActive: '#39a827',
		labelColor: '#000000',

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
		inputButton: '#199007',
		inputButtonText: '#FFFFFF',
		inputButtonActive: '#199007',
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