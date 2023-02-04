import React from 'react'


type InputProps = {
  placeholder?: string,
  className?: string,
  label?: string,
  withlabel?: boolean,
  required?: boolean,
  onChange?: (e: any) => void,
  name?: string,
  containerClassName?: string,
  value?: string
}


export default function TextAreaInput(props: InputProps): any {
  return (
    <div className={`${props.containerClassName} w-full`}>
      {props.withlabel && <label className="ml-2">{props.label} {props.required && <span className="text-red-700">*</span>}</label>}
      <textarea {...props} className={`bg-[rgba(255,255,255,0.8)] w-full mb-4 mt-2 border-2 border-[#C1D6E9] rounded-md h-[6rem] py-2 pl-4 pr-3 placeholder-slate-400 text-black placeholder-gray h-12  placeholder-gray h-12  ${props.className}`} rows={9} ></textarea>
    </div>
  )
}
