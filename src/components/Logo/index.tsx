import { Container } from './styles/Container.css'
import {Logo as $Logo, Calculadora, Calorica} from './styles/Logo.css'

export function Logo(){
	return(
		<>
			<div className={Container}>
				<h1 className={$Logo} tabIndex={-1}>
					<b className={Calculadora}>Calculadora</b>
					<b className={Calorica}>Calorica</b>
				</h1>
			</div>
		</>
	)
}