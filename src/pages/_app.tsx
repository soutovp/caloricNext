import type { AppProps } from 'next/app'
import { Mode } from '@/components/Mode'
import { darkTheme, lightTheme } from '@/styles/themes.css'
import { useEffect, useState } from 'react'
import '@styles/styles.css'

export default function App({ Component, pageProps }: AppProps) {
	const [mode, setMode] = useState<boolean>()
	useEffect(()=>{
		const val = mode
		if(val === true){
			document.body.classList.remove(lightTheme)
			document.body.classList.add(darkTheme)
			localStorage.setItem('darkMode', val.toString())
			console.log(`Window localStorage : ${window.localStorage.getItem('darkMode')}`)
			setMode(val)
		}else if(val === false){
			document.body.classList.remove(darkTheme)
			document.body.classList.add(lightTheme)
			localStorage.setItem('darkMode', val.toString())
			console.log(`Window localStorage : ${window.localStorage.getItem('darkMode')}`)
			setMode(val)
		}
		if (typeof localStorage !== 'undefined' && typeof localStorage.getItem('darkMode') === 'string') {
			if (localStorage.getItem('darkMode') === 'true') {
				setMode(true)
			} else {
				setMode(false)
			}
			console.log(`Esquema de cores foi mudado para ${mode === true ? 'Dark Mode' : 'Light Mode'}`)
		}
	},[ mode])
	return (
		<>
			<Mode onClick={() => setMode(!mode)} icon={mode || false}/>
			<Component {...pageProps} />
		</>
	)
}