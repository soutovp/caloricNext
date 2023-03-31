import { TypeUser } from '@/entities/User/TypeUser'

export function calcMetabolismoBasal(data:TypeUser){
	if(data.gender === 'female'){
		return parseFloat(data.activity) * (655 + (9.6 * parseFloat(data.weight)) + (1.8 * parseFloat(data.height)) - (4.7 * parseInt(data.age)))
	}
	return parseFloat(data.activity) * (66 + (12.8 * parseFloat(data.weight)) + (5 * parseFloat(data.height)) - (6.8 * parseInt(data.age)))
}