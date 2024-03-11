import React from 'react'
import Health from "../assets/Images/Health2.svg"
import Nurse from "../assets/Images/nurse2.svg"
import { useNavigate } from 'react-router-dom'
const Landing = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/signup')
    }
    return (
        <div className='h-[100vh] gradient_wall flex items-center justify-center overflow-hidden w-[100vw]'>
            <div className=' w-[100%] space-y-10'>
                <div className=' flex items-center justify-center'>
                    <img src={Health}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <img src={Nurse} ></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className='text-3xl'>MEDXPERT</h1>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1>One-Stop Solution to All your Health Care need</h1>
                </div>
                <div className='   w-[100%] flex items-center justify-center'>
                    <div className='flex rounded-lg shadow-md drop-shadow-md  p-3  w-[80%] items-center gradient_button justify-center'>
                        <button onClick={handleClick} className='text-xl'>SignUp</button>
                    </div>
                </div>
                <div className=' w-[100%] flex items-center justify-center'>
                    <div className='flex drop-shadow-md shadow-md rounded-lg  p-3  w-[80%] items-center gradient_button justify-center'>
                        <button className='text-xl'>Login</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landing