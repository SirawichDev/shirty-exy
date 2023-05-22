import React, { ButtonHTMLAttributes, FC } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  handleClick: () => void
  icon?: React.ReactNode
}
const Button: FC<ButtonProps> = ({ icon, handleClick, children, ...props }) => {
  return (
    <>
      <button
        onClick={handleClick}
        className={'p-2 text-4xl border-2 hover:bg-accent hover:text-white'}
        {...props}
      >
        {children} <span>{icon}</span>
      </button>
    </>
  )
}

export default Button
