import React, { useEffect } from 'react'
import leftarrow from "../assets/Images/Left Arrow.png"
import docphoapp from "../assets/Images/ddphoapp.svg"
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import DateCard from '../components/DateCard'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from "react"
const Appointment = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const state = location.state
    const [value, onChange] = useState(new Date())
    const [appDate, setAppDate] = useState({
        day: null,
        month: null,
        year: null,
    });

    const yearObj = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // const handleChange=(e)=>{
    //     onChange(value)
    // }
    useEffect(() => {

        setAppDate({
            day: value.getDate(),
            month: yearObj[value.getMonth()],
            year: value.getFullYear(),
        });


    }, [value])
    console.log(appDate)

    return (

        <div className='h-[100vh] gradient_wall p-4 flex items-start justify-center  w-[100vw]'>
            <div className=' w-[100%] space-y-3'>
                {/* <div></div> */}
                <div className=' flex items-centre justify-start'>
                    <img onClick={() => { navigate(-1) }} src={leftarrow}></img>
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
                <div className='flex items-centre justify-start text-2xl font-bold'>Select Date</div>                <div className=' flex items-start justify-center  w-[100%] h-[285px]'>
                    <div className=' w-fit'>
                        <Calendar onChange={onChange} value={value} />
                    </div>
                </div>
                <div className='flex items-centre justify-start text-2xl font-bold'>Select time</div>
                <div className='w-[100%] flex items-center justify-between h-[60px]'>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button>8:00 AM</button>
                    </div>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button>10:00 AM</button>
                    </div>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button>12:00 AM</button>
                    </div>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button>2:00 AM</button>
                    </div>

                </div>
                <div className='w-[100%] flex items-center justify-between h-[60px] '>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button>4:00 PM</button>
                    </div>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button>6:00 PM</button>
                    </div>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button>8:00 PM</button>
                    </div>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button>10:00 PM</button>
                    </div>
                </div>
                <div className='   w-[100%] flex items-center justify-center '>
                    <div className='mt-[15px] flex rounded-lg shadow-md drop-shadow-md  p-3  w-[80%] items-center gradient_button justify-center'>
                        <button className='text-xl font-bold text-white '>Book an Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment