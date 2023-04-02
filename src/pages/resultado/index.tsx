import { calcMetabolismoBasal } from '@/components/calcMetabolismoBasal'
import { Form } from '@styles/Home.css'
import { Label } from '@styles/Home.css'
import { input } from '@styles/Home.css'
import { Container, H1 } from '@styles/Home.css'
import Head from 'next/head'
import Link from 'next/link'
export default function Resultado(){

	const userData = JSON.parse(localStorage.getItem('user') || '{}')
	return(
		<>
			<Head>
				<title>Resultado - Caloric App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Link style={{textDecoration: 'none', color:'purple', fontSize: '64px', padding:'20px'}} href={'/'}> {'<'} </Link>
			<h1 className={H1}>
				<b>Calculadora</b>
				<b>Calorica</b>
			</h1>
			<div className={Form}>
				<div className={Container}>
					<label className={Label} htmlFor="gastoCalorico">Gasto calórico Normal</label>
					<input type="text" className={input} value={calcMetabolismoBasal(userData).toFixed(2)} disabled/>
				</div>
			</div>
		</>
	)
}