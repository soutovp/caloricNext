export function macrosDivider(calorias:number ,proteina=.25, carboidrato=.55, gordura=.2){
	if(proteina+carboidrato+gordura !== 1){
		//@ts-ignore
		throw new Error(`calculo de macros está com as porcentagens erradas.\n O total deu ${(proteina+carboidrato+gordura).toFixed(2)*100}%`)
	}

	return {
		proteina:(calorias*proteina).toFixed(0),
		carboidrato:(calorias*carboidrato).toFixed(0),
		gordura:(calorias*gordura).toFixed(0)
	}
}