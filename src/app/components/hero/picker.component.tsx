import { useRoot } from '@/app/store/root.context'
import Image from 'next/image'
import React from 'react'

const Picker = () => {
  const {
    selectColor,
    colors,
    selectedColor,
    images,
    selectImage,
  } = useRoot()
  return (
    <div
      className={
        'w-full justify-center absolute flex items-center gap-4 bottom-2 z-10'
      }
    >
      <div className={'relative flex items-center pb-2'}>
        {images.map((image: string, index) => (
          <Image
            onClick={() => selectImage(image)}
            className={'pointer'}
            width={200}
            key={index}
            height={100}
            src={`/${image}`}
            alt={'logo'}
            style={{ objectFit: 'cover' }}
          />
        ))}
      </div>
      {colors.map((color: string, index: number) => (
        <div
          key={index}
          role={'checkbox'}
          tabIndex={0}
          aria-checked={selectedColor as any}
          onClick={() => selectColor(color)}
          className={
            'w-8 h-8 rounded-full border-4 border-white focus:outline-none focus:shadow-outline'
          }
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  )
}

export default Picker
