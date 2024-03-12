import React from 'react'
import leftarrow from "../assets/Images/Left Arrow.png"
import docphoapp from"../assets/Images/ddphoapp.svg"
const Appointment = () => {
    return (
        <div className='h-fit gradient_wall p-4 flex items-start justify-center  w-[100vw]'>
            <div className=' w-[100%] space-y-2'>
                {/* <div></div> */}
                <div className=' flex items-centre justify-start'>
                    <img src={leftarrow}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold '>Detail Doctor</h1>
                </div>
                <div></div>
                <div className='flex items-center justify-center'>
                    <div>
                        <div className='flex items-center justify-center'><img src={docphoapp}></img></div>
                    </div>
                    <div>
                    
                        <div className='flex items-center justify-center'><h1>Dr.Patil</h1></div>
                        <div className='flex items-center justify-center'><h2>Dermatologist</h2></div>
                        <div className='flex items-center justify-center'>4.5★ (120 reviews)</div>
                    </div>

                </div>
                </div>
                </div>
        )
}

export default Appointment