import React from 'react'
import Health from "../assets/Images/Health2.svg"
import Nurse from "../assets/Images/nurse2.svg"
import { useNavigate } from 'react-router-dom'
import google from "../assets/Images/google.svg"
const Landing = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/signup')
    }
    // const handleLogin=()=>{
    //     window.location.href('http://localhost:5000/auth/google')
    // }
    return (
        <div className='h-[100vh]  gradient_wall flex items-center justify-center overflow-hidden w-[100vw]'>
            <div className='  w-[100%] space-y-8'>

                <div className=' flex items-center justify-center'>
                    <img src={Health}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <img className='w-[150px]' src={Nurse} ></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className=' text-[#8771EB] font-bold text-[35px]'>MedXpert</h1>
                </div>
                <div className=' flex items-center justify-center'>
                    <div className='justify-center'>
                        <h1 className=' font-semibold text-center'>One-Stop <span className='text-[#8771EB] font-bold underline'>Solution</span> </h1>
                        <h1 className='font-bold'>To All your Health care need</h1>
                    </div>


                </div>
                <div className='   w-[100%] flex items-center justify-center'>
                    <div className='flex rounded-lg shadow-md drop-shadow-md  p-3  w-[80%] items-center gradient_button justify-center'>
                        <button onClick={handleClick} className='text-xl font-bold text-white '>SignUp</button>
                    </div>
                </div>
                <div className=' w-[100%] flex items-center justify-center'>
                    <div className=' gap-2 flex drop-shadow-md border-4 border-[#8771EB] shadow-md rounded-lg  p-3  w-[80%] items-center justify-center'>
                        <div><button onClick={()=>{navigate('/home')}} className='text-xl font-bold text-black'>Login</button></div>
                        <div>
                            <img src={google} className='w-[20px]'></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landing