import Image from 'next/image'
import React from 'react'
import backgroundImage from '../assets/desktop-background-1.jpg'

const DesktopBackground = () => {
  return (
    <div className='absolute -z-50 top-0 left-0 w-full h-full'>
    <Image className='h-full w-full' alt='desktop-background-image' src={backgroundImage}/>
  </div>)
}

export default DesktopBackground