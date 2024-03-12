import React from 'react'
import leftarrow from "../assets/Images/Left Arrow.png"
function doctors() {
    
  return (
    <div className='h-[100vh] gradient_wall p-4 flex items-start justify-center overflow-hidden w-[100vw]'>
        <div className=' w-[100%] space-y-4'>
        <div></div>
        <div className=' flex items-centre justify-start'>
            <img src={leftarrow}></img>
        </div>
        <div className=' flex items-center justify-center'>
            <h1 className='text-3xl'>Doctors</h1>
        </div>
        </div>
    </div>
  )
}

export default doctors