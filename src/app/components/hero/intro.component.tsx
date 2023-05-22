import Button from '@/app/components/button.component'
import { WATCH_MODE } from '@/app/constant'
import React from 'react'
import { useRoot } from '@/app/store/root.context'

const Intro = () => {
  const { switchMode } = useRoot()
  return (
    <div
      className={
        'absolute flex bottom-1/4 items-end gap-44 justify-center z-10 px-10 text-accent'
      }
    >
      <div className="text-9xl space-y-10 text-shadow-lg pb-10 shadow-orange-50 flex flex-col uppercase">
        <span>build.</span>
        <span>your.</span>
        <span className="highlight-text">dream shirt.</span>
      </div>
      <div className={'flex flex-col items-start justify-end gap-10 space-y-2'}>
        <span className=" text-7xl">Lets Create Customize your Shirt</span>
        <Button handleClick={() => switchMode(WATCH_MODE)}>Lets Go</Button>
      </div>
    </div>
  )
}

export default Intro
