import Button from '@/app/components/button.component'
import { HOME_MODE } from '@/app/constant'
import { useRoot } from '@/app/store/root.context'
import React from 'react'
import Cart from '@/app/components/icons/Cart'

const Header = () => {
  const { mode, switchMode } = useRoot()
  return (
    <nav className="fixed z-10 w-full p-4 flex items-center justify-between">
      <div className="flex">
        <div className="content-blue text-accent">Shirty</div>
        <div className="circ-pink"></div>
      </div>
      {mode === HOME_MODE ? (
        <Cart className=" w-16 h-16" color="black" />
      ) : (
        <Button handleClick={() => switchMode(HOME_MODE)}>Go back</Button>
      )}
    </nav>
  )
}

export default Header
