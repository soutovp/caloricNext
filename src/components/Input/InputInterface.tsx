import { ClassAttributes, InputHTMLAttributes, KeyboardEventHandler, RefObject } from 'react'

export interface InputInterface {
	type:'number'|'text',
	min?:number,
	max?:number,
	onChange?:Function,
	onKeyDown?:Function,
	autoFocus?:boolean,
	name:string,
	className?:string,
	tabIndex?:number
}