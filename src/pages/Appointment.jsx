import React from 'react'
import leftarrow from "../assets/Images/Left Arrow.png"
import docphoapp from"../assets/Images/ddphoapp.svg"
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Appointment = () => {
    const navigate =useNavigate();
    const location =useLocation()
    const state=location.state
    
    return (

        <div className='h-fit gradient_wall p-4 flex items-start justify-center  w-[100vw]'>
            <div className=' w-[100%] space-y-2'>
                {/* <div></div> */}
                <div className=' flex items-centre justify-start'>
                    <img onClick={()=>{navigate(-1)}} src={leftarrow}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold '>Detail Doctor</h1>
                </div>
                <div></div>
                <div className='flex items-center gap-4 justify-center'>
                    <div>
                        <div className='flex items-center justify-center'><img src={docphoapp}></img></div>
                    </div>
                    <div>
                    
                        <div className='flex items-center justify-center'><h1 className=' font-semibold '>{state.name}</h1></div>
                        <div className='flex items-center justify-center'><h2>{state.spec}</h2></div>
                        <div className='flex items-center justify-center'>{state.rating} </div>
                    </div>

                </div>
                </div>
                </div>
        )
}

export default Appointment