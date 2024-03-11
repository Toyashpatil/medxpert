import React from 'react'
import leftarrow from "../assets/Images/Left Arrow.png"
import Google from "../assets/Images/google.svg"
import Face from "../assets/Images/fb.svg"
import Apple from "../assets/Images/apple.svg"
const Password = () => {
  return (
    <div className='h-[100vh] gradient_wall p-4 flex items-start justify-center overflow-hidden w-[100vw]'>
         <div className=' w-[100%] space-y-4'>
                <div className=' flex items-centre justify-start'>
                    <img src={leftarrow}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className='text-3xl'>Set Password</h1>
                </div>
                <div className=' flex items-center justify-center'>
                    <h2>Your new password must be different from previously used passwords</h2>
                </div>
                <div className='flex items-center justify-center'>
                        <input type="password" placeholder="Password" required></input>
                </div>
                <div className='flex items-center justify-center'>
                <input type="password" placeholder="Confirm Password" required></input>
                </div>
                <div className='   w-[100%] flex items-center justify-center'>
                    <div className='flex rounded-lg shadow-md drop-shadow-md  p-3  w-[80%] items-center gradient_button justify-center'>
                        <button className='text-xl font-bold text-white '>SignUp</button>
                    </div>
                </div>
                <div>
                    <h6>or sign up with</h6>
                </div>
                <div className=' flex items-center justify-center'>
                    <img src={Google}></img>
                    <img src={Face}></img>
                    <img src={Apple}></img>
                </div>
         </div>
    </div>
  )
}

export default Password