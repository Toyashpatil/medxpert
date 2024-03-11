import React from 'react'
import leftarrow from "../assets/Images/Left Arrow.png"
import PHOTO from "../assets/Images/signup photo.png"
const SignUp = () => {
  return (
    <div className='h-[100vh] gradient_wall p-4 flex items-start justify-center overflow-hidden w-[100vw]'>
            <div className=' w-[100%] space-y-4'>
                <div></div>
                <div className=' flex items-centre justify-start'>
                    <img src={leftarrow}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className='text-3xl'>Sign Up</h1>
                </div>
                <div className=' flex items-center justify-start'>
                    <h1>Complete your Profile</h1>
                </div>
                <div className=' flex items-center justify-start'>
                    <h2>Dont worry, only you can see your personal info, no one else will be able to see it.</h2>
                </div>
                <div className=' flex items-center justify-center'>
                    <img src={PHOTO} ></img>
                </div>
                <div className='flex items-center justify-center'>
                        <input type="text" placeholder="Full Name" required></input>
                </div>
                <div className='flex items-center justify-center'>
                <input type="number" placeholder="Age" required></input>
                </div>
                <div className='flex items-center justify-center'><input type="email" placeholder="Email" required></input>
                </div>
                <div className='flex items-center justify-center'>
                <input type="tel" placeholder="Phone Number" required></input>
                </div>
                <div>
                    <h2>By tappinng "Next"...</h2>
                </div>
                <div className='   w-[100%] flex items-center justify-center '>
                    <div className='mt-[15px] flex rounded-lg shadow-md drop-shadow-md  p-3  w-[80%] items-center gradient_button justify-center'>
                        <button className='text-xl font-bold text-white '>NEXT</button>
                    </div>
                </div>
                <div>
                    <h2>Already</h2>
                </div>
    

            </div>
        </div>
  )
}

export default SignUp