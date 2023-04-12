export function metabolismoBasal(taxaDeAtividade:number, peso:number, altura:number, sexo:string, idade:number){
	if(sexo === 'female'){
		return taxaDeAtividade * ((10 * peso) + (6.25 * (altura*100)) - (5 * idade) - 161)
	}else{
		return taxaDeAtividade * ((10 * peso) + (6.25 * (altura*100)) - (5 * idade)+5)
	}
}