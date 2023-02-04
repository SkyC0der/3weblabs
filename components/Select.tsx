import React from 'react'

type InputProps = {
  type?: string,
  placeholder?: string,
  className?: string,
  label?: string,
  withlabel?: boolean,
  required?: boolean,
  onChange?: (e: any) => void,
  name?: string,
  options: any[],
  containerClassName?: string,
  value: any
}

export default function SelectInput(props: InputProps) {
  return (
    <div className={`${props.containerClassName} w-full`}>
      {props.withlabel && <label className="ml-2">{props.label} {props.required && <span className="text-red-700">*</span>}</label>}
      <select {...props} className={`bg-[rgba(255,255,255,0.8)] w-full mb-4 mt-2 border-2 border-[#C1D6E9] rounded-md h-[6rem] py-2 pl-4 pr-3 placeholder-slate-400 text-black placeholder-gray h-12  placeholder-gray h-12  ${props.className}`} >
        {props.options.map(option => {
          return <option value={ option.value } key={option.value}>{option.display}</option>
        })}
      </select>
    </div>
  )
}
