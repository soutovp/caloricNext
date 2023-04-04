import React, { ChangeEvent, useRef } from 'react'
import { IInputRangeProps } from './IInputRangeProps'
import { ContainerInput, SInputRange } from './SInputRange.css'
interface IInputRangeState{
	count: number
}
export class InputRange extends React.Component<IInputRangeProps, IInputRangeState> {
	constructor(props:IInputRangeProps){
		super(props)
		this.state = {
			count: 0
		}
	}
	handleChange(e:ChangeEvent<HTMLInputElement>){
		this.setState({ count: Number(e.target.value) })
	}
	render(){
		const {label, name} = this.props
		const { count } = this.state

		return(
			<div className={ContainerInput}>
				{/* ts-ignore */}
				<label htmlFor={name}>{`${label} ${count}%`}</label>
				<div style={{backgroundColor:'white', borderRadius:'25px'}}>
					<input style={{width:`calc(${this.props.max}% - 2%)`}} onChange={e=>this.handleChange(e)} className={SInputRange} defaultValue={0} max={this.props.max} min={0} type="range" id={name} name={name} />
				</div>
			</div>
		)
	}

}