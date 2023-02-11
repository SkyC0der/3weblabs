import React from 'react'

export default function Button({ children,className }: {children: string,className?: string}): any {
  return (
    <button className={`border border-none rounded-l-lg rounded-r-lg p-3 font-normal text-white mx-2 bg-[rgba(0,0,0,0.5)] ${className}`}>{children}</button>
  )
}
