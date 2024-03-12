import React, { useEffect, useState } from 'react'
import arrow from "../assets/Images/Left Arrow.png"
import dp from "../assets/Images/profileDoc.svg"
import cal from "../assets/Images/calender.svg"
import ala from "../assets/Images/AlarmClock.svg"
import band from "../assets/Images/Bandage.svg"
import cardio from "../assets/Images/Heartbeat.svg"
import ped from "../assets/Images/ped.svg"
import derm from "../assets/Images/derm.svg"
import phy from "../assets/Images/phy.svg"
import brain from "../assets/Images/brain.svg"
import ute from "../assets/Images/Uterus.svg"
import tooth from "../assets/Images/Tooth.svg"
import foot from "../assets/Images/Foot.svg"
import ray from "../assets/Images/ray.svg"
import navHome from "../assets/Images/navHome.svg"
import navHos from "../assets/Images/navHos.svg"
import navDoc from "../assets/Images/navDoctor.svg"
import navProfile from "../assets/Images/navProfile.svg"
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'


const Home = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className='h-fit p-4  flex items-start justify-center  w-[100vw]'>
            <div className=' fixed bottom-0 z-10  w-[100%] flex items-center justify-center'>
                <div className='flex gap-8  rounded-lg mb-8 shadow-md drop-shadow-md  p-3  w-[80%] items-center bg-[#EBC3F5] justify-center'>

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
                        <Link to='/profile'><img src={navProfile} ></img></Link>
                    </div>
                </div>
            </div>
            <div className=' h-fit w-[100%] space-y-4'>

                <div className=' flex items-center justify-start'>
                    <img onClick={() => { navigate(-1) }} src={arrow}></img>
                </div>
                <div className=' flex  w-[100%] h-[10rem] items-start justify-center'>
                    <div className=' w-[90%] p-4 flex items-start justify-start rounded-md h-[100%] gradient_card drop-shadow-md shadow-md  '>
                        <div className='w-[100%]'>
                            <div>
                                <h1 className='text-white font-medium '>Hello, Toyash </h1>
                            </div>
                            <div className='flex items-center justify-center mt-2 w-[100%] '>

                                <a href='tel:112'>
                                    <button>
                                        <div className='bg-[#ffff] zoom-in-out-box h-[100px] w-[100px] rounded-full flex hover:ring-[20px] items-center justify-center'>
                                            <div>
                                                <h1 className=" text_one text-[#000000] font-bold  text-[32px]">SOS</h1>
                                            </div>
                                        </div>
                                    </button>
                                </a>

                            </div>



                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-start'>
                    <div className='justify-start'>
                        <h1 className='font-bold'>Upcoming Schedule</h1>
                    </div>
                </div>
                <div className='flex  overflow-x-auto '>
                    <div className=' gap-2 w-fit flex items-center justify-center  h-[150px]'>
                        <div className=' flex  w-[330px] h-[8rem] items-start justify-center'>
                            <div className=' w-[90%] p-2 flex items-center justify-start rounded-md h-[100%] gradient_card   '>
                                <div className='w-[100%] space-y-3 '>
                                    <div className='flex gap-6 items-center justify-start'>
                                        <div>
                                            <img src={dp}></img>
                                        </div>
                                        <div>
                                            <div>
                                                <h1 className='text-white font-semibold text-xl'>Dr. Khushi Poojary</h1>

                                            </div>
                                            <div>
                                                <h1 className='text-white font-semibold text-sm'>Cardiologist</h1>

                                            </div>

                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div className=' glass flex items-center justify-start gap-2 h-[40px] w-[100%] rounded-md '>
                                            <div className='flex items-center gap-1 justify-center'>
                                                <div>
                                                    <img src={cal}></img>
                                                </div>
                                                <div>
                                                    <h1 className='text-sm font-semibold'>Tuesday, 5th August</h1>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-1 justify-center'>
                                                <div>
                                                    <img src={ala}></img>
                                                </div>
                                                <div>
                                                    <h1 className='text-sm font-semibold'>18:00-19:00</h1>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' gap-2 w-fit flex items-center justify-center  h-[150px]'>
                        <div className=' flex  w-[330px] h-[8rem] items-start justify-center'>
                            <div className=' w-[90%] p-2 flex items-center justify-start rounded-md h-[100%] gradient_card   '>
                                <div className='w-[100%] space-y-3 '>
                                    <div className='flex gap-6 items-center justify-start'>
                                        <div>
                                            <img src={dp}></img>
                                        </div>
                                        <div>
                                            <div>
                                                <h1 className='text-white font-semibold text-xl'>Dr. Natasha Lunn</h1>

                                            </div>
                                            <div>
                                                <h1 className='text-white font-semibold text-sm'>Dermatologist</h1>

                                            </div>

                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div className=' glass flex items-center justify-start gap-2 h-[40px] w-[100%] rounded-md '>
                                            <div className='flex items-center gap-1 justify-center'>
                                                <div>
                                                    <img src={cal}></img>
                                                </div>
                                                <div>
                                                    <h1 className='text-sm font-semibold'>Tuesday, 5th August</h1>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-1 justify-center'>
                                                <div>
                                                    <img src={ala}></img>
                                                </div>
                                                <div>
                                                    <h1 className='text-sm font-semibold'>18:00-19:00</h1>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-start'>
                    <div className='justify-start'>
                        <h1 className='font-bold'>Doctors by Speciality</h1>
                    </div>
                </div>
                <div className='w-[100%]  h-fit space-y-2 '>
                    <div className='w-[100%] gap-6 flex items-center justify-center h-[100px] '>
                        <div className='justify-center space-y-2  '>
                            <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                <img src={band}></img>
                            </div>
                            <div className=' flex items-center justify-center'>
                                <h1 className='text-xs text-center'>General</h1>
                            </div>
                        </div>

                        <div className='justify-center space-y-2 '>
                            <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                <img src={cardio}></img>
                            </div>
                            <div className=' flex items-center justify-center'>
                                <h1 className='text-xs'>Cardio</h1>
                            </div>
                        </div>
                        <div className='justify-center space-y-2 '>

                            <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                <img src={ped}></img>
                            </div>
                            <div className=' flex items-center justify-center'>
                                <h1 className='text-xs'>Ped </h1>
                            </div>


                        </div>
                        <div className='justify-center space-y-2 '>
                            <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                <img src={derm}></img>
                            </div>
                            <div className=' flex items-center justify-center'>
                                <h1 className='text-sm'>Derm</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] h-[100px] '>
                        <div className='w-[100%] gap-6 flex items-center justify-center h-[100px] '>
                            <div className='justify-center space-y-2  '>
                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={phy}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-xs text-center'>Psych</h1>
                                </div>
                            </div>

                            <div className='justify-center space-y-2 '>
                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={brain}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-xs'>Nuro</h1>
                                </div>
                            </div>
                            <div className='justify-center space-y-2 '>

                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={brain}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-xs'>Ophthal </h1>
                                </div>


                            </div>
                            <div className='justify-center space-y-2 '>
                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={ute}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-sm'>Gyno</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[100%] h-[100px] '>
                        <div className='w-[100%] gap-6 flex items-center justify-center h-[100px] '>
                            <div className='justify-center space-y-2  '>
                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={tooth}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-xs text-center'>Dentist</h1>
                                </div>
                            </div>

                            <div className='justify-center space-y-2 '>
                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={foot}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-xs'>ortho</h1>
                                </div>
                            </div>
                            <div className='justify-center space-y-2 '>

                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={ray}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-xs'>Rad </h1>
                                </div>


                            </div>
                            <div className='justify-center space-y-2 '>
                                <div className='w-[60px] flex items-center justify-center bg-white drop-shadow-md shadow-md rounded-xl h-[60px]'>
                                    <img src={band}></img>
                                </div>
                                <div className=' flex items-center justify-center'>
                                    <h1 className='text-sm'>Uro</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[100%] h-[100px] '>

                    </div>
                </div>











            </div>
        </div>
    )
}

export default Home