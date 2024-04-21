import React from 'react'
import navHome from "../assets/Images/navHome.svg"
import navHos from "../assets/Images/navHos.svg"
import navDoc from "../assets/Images/navDoctor.svg"
import navProfile from "../assets/Images/navProfile.svg"
import { Link } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../firebase'

const Navbar = () => {

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("OUT")
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className=' fixed bottom-0 z-10  w-[100%] flex items-center justify-center'>
            <div className='flex gap-14  rounded-lg shadow-md drop-shadow-md  p-3  w-[100%] items-center bg-[#EBC3F5] justify-center'>


                <div>
                    <Link to='/home'>
                        <img src={navHome} ></img>
                    </Link>
                </div>

                <div>
                    <Link to='/doctors'><img src={navDoc} ></img></Link>

                </div>
                <div>
                    <Link to='/hospital'><img src={navHos} ></img></Link>
                </div>
                <div>
                    <button onClick={handleLogout} ><img src={navProfile} ></img></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar