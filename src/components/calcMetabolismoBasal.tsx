import { User } from '@/entities/User/User'

export function calcMetabolismoBasal(user:User){
	if(user.gender === 'female'){
		return parseFloat(user.activity) * (655 + (9.6 * user.weight) + (1.8 * user.height) - (4.7 * user.age))
	}
	return parseFloat(user.activity) * (66 + (12.8 * user.weight) + (5 * user.height) - (6.8 * user.age))
}