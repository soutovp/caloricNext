import { Container, Form, Label, Input, radioStyles, atividadeStyles, inputButton, LinkStyle } from '@/styles/HomePage/index.css'
import Head from 'next/head'; import Link from 'next/link'; import { useState, useRef } from 'react'
import { UserActivityAcceptedValues } from '@entities/User/UserActivityAcceptedValues'
import { TypeUserActivityAcceptedValues } from '@/entities/User/TypeUserActivityAcceptedValues'
import { Input as CInput } from '@/components/Input/Input'
import { User } from '@/entities/User/User'
import { Logo } from '@/components/Logo'
export default function Home() {
	const [user] = useState(new User())
	// const [weight, setWeight] = useState<any>()
	const [atividadeDesc, atividadeDescChange] = useState('Pouco ou nenhum exercício')

	const handleChange = (value:{target:{name: string, value:any}})=>{
		const _name= value.target.name
		const _value = value.target.value
		if(_name === 'activity'){
			user.setActivity(_value.toString())
			atividadeDescChange(UserActivityAcceptedValues[user.activity as TypeUserActivityAcceptedValues])
			console.log(user)
			return
		}
		//@ts-ignore
		user[_name as keyof User] = _value
		console.log(user)
	}

	const handleClick = ()=>{
		console.log(user.weight)
		localStorage.setItem('user', JSON.stringify(user))
	}



	const firstElementRef = useRef<HTMLInputElement>(null)
	const lastElementRef = useRef<HTMLInputElement>(null)
	// const pesoInput = useRef<HTMLInputElement>(null)

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Tab' && e.shiftKey) {
		  // shift + tab
		  if (document.activeElement === firstElementRef.current) {
		    e.preventDefault()
		    lastElementRef.current?.focus()
		  }
		} else if (e.key === 'Tab') {
		  // tab
		  if (document.activeElement === lastElementRef.current) {
		    e.preventDefault()
		    firstElementRef.current?.focus()
		  }
		}
	}
	return (
		<>
			<Head>
				<title>Caloric App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Logo/>
			<form className={Form} action="#" >

				<div className={Container}>
					<label className={Label} htmlFor="weight">Peso</label>
					<CInput type='number' ref={firstElementRef} min={0} max={635} onChange={handleChange} autoFocus={true} name='weight' className={Input} tabIndex={1} onKeyDown={handleKeyDown}/>
					{/* <input ref={firstElementRef} onKeyDown={handleKeyDown} value={weight} min={0} max={150} id='weight' name='weight' type="number" className={Input} onChange={ handleChange } tabIndex={1} autoFocus={true} /> */}
				</div>

				<div className={Container}>
					<label className={Label} htmlFor="height">Altura</label>
					<CInput type='number' min={0} max={300} onChange={handleChange} name='height' className={Input} tabIndex={2} />
					{/* <input onKeyDown={handleKeyDown} name='height' type="number" min={.8} max={3} className={Input} onChange={handleChange} tabIndex={2}/> */}
				</div>

				<div className={Container}>
					<label className={Label} htmlFor="objective">Objetivo</label>
					<select className={Input} name="objective" id="objective" onChange={handleChange} tabIndex={3}>
						<option value="perda">Perda de Peso</option>
						<option value="ganho">Ganho de Peso</option>
						<option value="manter">Manter o Peso</option>
					</select>
				</div>

				<div className={Container}>
					<label className={Label} htmlFor="activity">Atividade</label>
					<select className={Input} name="activity" onChange={handleChange} tabIndex={4}>
						<option value={1.2}>Sedentario</option>
						<option value={1.375}>Leve</option>
						<option value={1.55}>Moderada</option>
						<option value={1.725}>Alta</option>
						<option value={1.9}>Extremo</option>
					</select>
					<p className={atividadeStyles}>{atividadeDesc}</p>
				</div>

				<div className={Container}>
					<label className={Label} htmlFor="age">Idade</label>
					<CInput min={0} max={110} name='age' type='number' className={Input} onChange={handleChange} tabIndex={5}/>
					{/* <input placeholder='Digite a sua idade' name='age' type="number" className={Input} onChange={handleChange} tabIndex={5}/> */}
				</div>

				<div className={Container}>
					<label style={{marginBottom: '20px'}} htmlFor="gender" className={Label}>Sexo</label>
					<div style={{padding: 5}}>
						<input className={radioStyles} type="radio" name="gender" id="masculino" value={'masculino'} onChange={handleChange} tabIndex={6}/>
						<label htmlFor="masculino">Masculino</label>
					</div>
					<div style={{padding: 5}}>
						<input className={radioStyles} type="radio" name="gender" id="feminino" value={'feminino'} onChange={handleChange} tabIndex={7}/>
						<label htmlFor="feminino">Feminino</label>
					</div>
				</div>

				<div className={Container}>
					<Link className={LinkStyle} href='/resultado' tabIndex={-1}>
						<input ref={lastElementRef} onKeyDown={handleKeyDown} id='buttonForm' type="button" value="Calcular" className={inputButton} onClick={handleClick} tabIndex={8} />
					</Link>
				</div>
			</form>
		</>
	)
}
