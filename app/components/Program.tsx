'use client'

import React from 'react'
import Draggable from 'react-draggable'

const Program = () => {
  return (
    <Draggable bounds='parent'>

    <section className='absolute w-80 h-96 border border-blue-600 bg-white'>
        <h1 className='text-black'>Program 1</h1>
    </section>
    </Draggable>
  )
}

export default Program