import { ChangeEvent, useState, ForwardedRef, forwardRef } from 'react'
import { InputInterface } from './InputInterface'
import { stringify } from 'querystring'

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputInterface>(
	(
		{min, max, onChange, autoFocus, name, className, type, tabIndex, onKeyDown}:InputInterface,
		ref:ForwardedRef<HTMLInputElement>
	)=>{
		const [value, setValue] = useState<any>('')
		const [alert, setAlert] = useState<string>('')
		const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>)=> {
			onKeyDown ? onKeyDown(e) : {}
		}
		if(type === 'number'){
			const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
				setValue(event.target.valueAsNumber)
				if(max && event.target.valueAsNumber > max ){
					setAlert(`Valor deve ser inferior a ${max}`)
					onChange ? onChange({target:{name:event.target.name, value:'0'}}) : {}
					return
				}
				if(min && event.target.valueAsNumber){
					setAlert(`Valor deve ser superior a ${min}`)
					onChange ? onChange({target:{name:event.target.name, value:'0'}}) : {}
					return
				}
				setAlert('')

				event.target.value === '' ?
					onChange ? onChange({target:{name:event.target.name, value:'0'}}) : {} :
					onChange ? onChange({target:{name:event.target.name, value:event.target.value}}) : {}
				return
			}
			return(
				<>
					{/* <div className={className}>
						<input style={{backgroundColor:'transparent', color:'white',position:'absolute', outlineColor:'transparent'}} type={type} name={name} value={value} onChange={handleChange} autoFocus={autoFocus} className={className} tabIndex={tabIndex} onKeyDown={handleOnKeyDown} ref={ref}/>
						<div style={{position:'absolute'}}>{value}</div>
					</div> */}
					<input type={type} name={name} value={value} onChange={handleChange} autoFocus={autoFocus} className={className} tabIndex={tabIndex} onKeyDown={handleOnKeyDown} ref={ref}/>
					<div style={{paddingTop:'15px', color:'red'}}>{alert}</div>
				</>
			)
		}
		return(
			<></>
		)
	})