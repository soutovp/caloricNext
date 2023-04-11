import { IUserData } from './IUserData'

export class User implements IUserData {
	weight!: number
	height!: number
	objective: string = 'perda'
	activity: string = '1.2'
	campoProtein: number = 0
	carboidrato: number = 0
	gordura: number = 0
	setActivity(activity:string){this.activity = activity}
	age!: number
	gender!: string
	getMetabolismoBasal(){
		if(this.gender === 'female'){
			return parseFloat(this.activity) * (655 + (9.6 * this.weight) + (1.8 * this.height) - (4.7 * this.age))
		}
		return parseFloat(this.activity) * (66 + (12.8 * this.weight) + (5 * this.height) - (6.8 * this.age))
	}
}