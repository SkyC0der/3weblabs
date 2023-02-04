import React, { ChangeEventHandler } from 'react'

type InputProps = {
 type: string,
 placeholder ?: string, 
 className ?: string, 
 label?: string, 
 withlabel ?: boolean, 
 required ?: boolean, 
 name ?: string ,
 value ?: string,
 id ?: string,
onChange?: any,
accept?: string
}


export default function Input(props: InputProps ) {
  return (
    <div className="w-full">
      {props.withlabel && <label className="ml-2">{props.label} {props.required && <span className="text-red-700">*</span>}</label>}
      <input {...props} className={`bg-[rgba(255,255,255,0.8)] w-full border-2 border-[#C1D6E9] rounded-md h-[6rem] py-2 pl-4 pr-3 placeholder-slate-400 text-black placeholder-gray h-12  ${props.className}`}    />
    </div>
  )
}
