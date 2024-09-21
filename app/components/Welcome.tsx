import React from 'react'

const Welcome = ({platform}:{platform:'desktop'|'mobile'|'null'}) => {
  return (
    <main className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black">
      <h1 className="text-5xl">Welcome {platform}</h1>
    </main>
  )
}

export default Welcome