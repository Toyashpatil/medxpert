import React from 'react'
import leftarrow from "../assets/Images/Left Arrow.png"
import profile from "../assets/Images/profileicon.svg"
import { useNavigate } from 'react-router'
import arrow from "../assets/Images/Arrownexticon.svg"
import appointment from "../assets/Images/appointmenticon.svg"
import gov from "../assets/Images/govticon.svg"
import logout from "../assets/Images/Logoutlogouticon.svg"
import main from "../assets/Images/mainphoto.svg"
const Settings = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }
    const handleChange = (e) => {
        let { value, name } = e.target
        console.log(value, name)
    }
    return (
        <div className='h-[100vh] gradient_wall p-4 flex items-start justify-center overflow-hidden w-[100vw]'>
            <div className=' w-[100%] space-y-8'>
                <div className=' flex items-centre justify-start'>
                    <img onClick={handleBack} src={leftarrow}></img>
                </div>
                <div className=' flex items-centre justify-center'>
                    <img src={main}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold '>Smit Patil</h1>
                </div>
                <div className='absolute w-[100vw] h-[0vh] left-0 top-73 border border-gray-500 transform rotate-0.15deg'>
                </div>
                <div className='flex items-center'>
                    <div className='p-5 justify-start'>
                        <img src={profile}></img>

                    </div>
                    <div className='p-5 text-2xl'>My Profile</div>
                    <div className=''>
                        <img src={arrow}></img>
                    </div>
                </div>
                <div className='absolute w-[100vw] h-[0vh] left-0 top-73 border border-gray-500 transform rotate-0.15deg'>
                </div>
                <div className='flex items-center'>
                    <div className='p-5 justify-start'>
                        <img src={appointment}></img>

                    </div>
                    <div className='p-5 text-2xl'>Appointments</div>
                    <div className=''>
                        <img src={arrow}></img>
                    </div>
                </div>
                <div className='absolute w-[100vw] h-[0vh] left-0 top-73 border border-gray-500 transform rotate-0.15deg'>
                </div>
                <div className='flex items-center'>
                    <div className='p-5 justify-start'>
                        <img src={gov}></img>

                    </div>
                    <div className='p-5 text-2xl'>Government Policies</div>
                    <div className=''>
                        <img src={arrow}></img>
                    </div>
                </div>
                <div className='absolute w-[100vw] h-[0vh] left-0 top-73 border border-gray-500 transform rotate-0.15deg'>
                </div>
                <div className='flex items-center'>
                    <div className='p-5 justify-start'>
                        <img src={logout}></img>

                    </div>
                    <div className='p-5 text-2xl'>Logout</div>
                    <div className=''>
                        <img src={arrow}></img>
                    </div>
                </div>
                <div className='absolute w-[100vw] h-[0vh] left-0 top-73 border border-gray-500 transform rotate-0.15deg'>
                </div>

                
            </div>
        </div>
    )
}

export default Settings