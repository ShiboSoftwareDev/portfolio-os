import React from 'react'

const MobileGrid = () => {
    // TODO this should be part of a home screen
  return (
    <section className='absolute top-0 left-0 w-full h-full grid grid-cols-3 justify-items-center items-center'>
{[...Array(12)].map((item,index)=><div key={index} className='border border-white w-[80%] aspect-square'>{index}</div>)}
    </section>
  )
}

export default MobileGrid