export interface IUserData {
	weight: number;
	height: number;
	objective: string;
	activity: string;
	age: number;
	gender: string;
	getMetabolismoBasal(): number
   }