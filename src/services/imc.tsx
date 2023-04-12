import { imcStyle } from './imcStyle.css'

function fraseConstructor(classificado:string, frase2:string){
	return (
		<>
			<p className={imcStyle}>{`Considerando seu peso, você está classificado como "${classificado}"`}</p>
			<p className={imcStyle}>{frase2}</p>
		</>
	)
}
const classification = {
	magreza: fraseConstructor('Magraza', ''),
	normal: fraseConstructor('Normal', ''),
	sobrepeso: fraseConstructor('Sobrepeso','Esta é a classificação de Obesidade grau 1'),
	obesidade: fraseConstructor('Obesidade','Esta é a classificação de Obesidade grau 2' ),
	obesidadeGrave: fraseConstructor('Obesidade Grave', 'Esta é a classificação de obesidade grau 3')
}
export function imc(peso:number, altura:number){
	const resultado = peso / (altura * altura)
	if(resultado < 18.5){
		console.error('Algo saiu errado com o calculo, pois retornou valor menor que 18.5')
		return <p></p>
	}
	return resultado>40 ? classification.obesidadeGrave :
		resultado>30 ? classification.obesidade :
			resultado>25 ? classification.sobrepeso :
				resultado>18.5 ? classification.normal :
					resultado<18.5 ? classification.magreza: <p></p>
}