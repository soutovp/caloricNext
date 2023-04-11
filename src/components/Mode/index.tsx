import Image from 'next/image'
import { Button } from './Button.css'
export function Mode({onClick, icon}:{onClick:Function, icon:boolean}){
	console.log(`Icon is ${icon}`)
	const handleClick = ()=>{
		onClick()
	}
	return(
		<button className={Button} onClick={handleClick}>
			<Image
				src={`${icon === true ? 'sun' : 'moon'}.svg`}
				alt='Descrição da imagem'
				width={35}
				height={35}
				style={{color:'black'}}
			/>
		</button>
	)
}