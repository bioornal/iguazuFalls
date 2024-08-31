import React from 'react'

const Button = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const baseStyles = 'px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantStyles = {
    default: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    outline: 'border border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500'
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button }