import React from 'react'

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${className}`}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'