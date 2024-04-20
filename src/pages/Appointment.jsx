import React, { useContext, useEffect } from 'react'
import leftarrow from "../assets/Images/Left Arrow.png"
import docphoapp from "../assets/Images/ddphoapp.svg"
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import DateCard from '../components/DateCard'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from "react"
import authContext from '../context/authContext'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import Loader from '../components/Loader'






const Appointment = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const state = location.state
    const { getAppointments, appointmentDetails, setappointmentDetails } = useContext(authContext)
    const [newApp, setNewApp] = useState({
        photourl: "no photo"
    })
    const [value, onChange] = useState(new Date())
    const [appDate, setAppDate] = useState({
        day: null,
        month: null,
        year: null,
    });
    const [isLoading, setIsLoading] = useState(true);
    const yearObj = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayObj = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // const handleChange=(e)=>{
    //     onChange(value)
    // }
    useEffect(() => {

        getAppointments()
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        setNewApp((prev) => {
            return ({
                ...prev,
                name: state.name,
                speciality: state.spec
            })
        })



    }, [])
    useEffect(() => {

        setNewApp((prev) => {
            return ({
                ...prev,
                date: value.getDate(),
                month: yearObj[value.getMonth()],
                day: dayObj[value.getDay()]

            })
        })

        // setAppDate({
        //     date: value.getDate(),
        //     month: yearObj[value.getMonth()],
        //     day: dayObj[value.getDay()]

        // });
        // console.log(value)


    }, [value])

    let uId = localStorage.getItem("user-id");
    const handleAppointment = async () => {
        if (!appointmentDetails) {
            await setDoc(doc(db, "appointments", `${uId}`), {
                Appointments: [
                    newApp
                ]
            })
        } else {
            await setDoc(doc(db, "appointments", `${uId}`), {
                Appointments: [
                    ...appointmentDetails,
                    newApp
                ]
            })
        }

        console.log("add")
    }
    // console.log(appDate)
    if (isLoading) {
        return <Loader />;
    }

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
                        <button onClick={() => {
                            setNewApp((prev) => {
                                return ({
                                    ...prev,
                                    time: "8:00 AM"
                                })
                            })
                        }}>8:00 AM</button>
                    </div>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button onClick={() => {
                            setNewApp((prev) => {
                                return ({
                                    ...prev,
                                    time: "10:00 AM"
                                })
                            })
                        }}>10:00 AM</button>
                    </div>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button onClick={() => {
                            setNewApp((prev) => {
                                return ({
                                    ...prev,
                                    time: "12:00 PM"
                                })
                            })
                        }}>12:00 PM</button>
                    </div>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button onClick={() => {
                            setNewApp((prev) => {
                                return ({
                                    ...prev,
                                    time: "2:00 PM"
                                })
                            })
                        }}>2:00 PM</button>
                    </div>

                </div>
                <div className='w-[100%] flex items-center justify-between h-[60px] '>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button onClick={() => {
                            setNewApp((prev) => {
                                return ({
                                    ...prev,
                                    time: "4:00 PM"
                                })
                            })
                        }}>4:00 PM</button>
                    </div>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button onClick={() => {
                            setNewApp((prev) => {
                                return ({
                                    ...prev,
                                    time: "6:00 PM"
                                })
                            })
                        }}>6:00 PM</button>
                    </div>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button onClick={() => {
                            setNewApp((prev) => {
                                return ({
                                    ...prev,
                                    time: "8:00 PM"
                                })
                            })
                        }}>8:00 PM</button>
                    </div>
                    <div className=' border-2 border-[#8771EB] rounded-lg p-2 '>
                        <button onClick={() => {
                            setNewApp((prev) => {
                                return ({
                                    ...prev,
                                    time: "10:00 PM"
                                })
                            })
                        }}>10:00 PM</button>
                    </div>
                </div>
                <div className='   w-[100%] flex items-center justify-center '>
                    <div className='mt-[15px] flex rounded-lg shadow-md drop-shadow-md  p-3  w-[80%] items-center gradient_button justify-center'>
                        <button onClick={handleAppointment} className='text-xl font-bold text-white '>Book an Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment