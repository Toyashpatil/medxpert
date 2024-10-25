import React, { useContext, useEffect, useState } from 'react';
import leftarrow from "../assets/Images/Left Arrow.png";
import docphoapp from "../assets/Images/ddphoapp.svg";
import { useNavigate, useLocation } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import authContext from '../context/authContext';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import Loader from '../components/Loader';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const Appointment = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);
    const [bookedSlots, setBookedSlots] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    const { getAppointments, appointmentDetails } = useContext(authContext);
    const [newApp, setNewApp] = useState({ photourl: "no photo" });
    const [value, onChange] = useState(new Date());
    const [isLoading, setIsLoading] = useState(true);
    
    const timeSlots = [
        "8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM",
        "4:00 PM", "6:00 PM", "8:00 PM", "10:00 PM"
    ];
    
    const yearObj = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayObj = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Load booked slots from local storage on mount
    useEffect(() => {
        const savedBookedSlots = JSON.parse(localStorage.getItem("bookedSlots")) || [];
        setBookedSlots(savedBookedSlots);
    }, []);

    const handleOpen = async () => {
        const uId = localStorage.getItem("user-id");
        const updatedAppointments = appointmentDetails ? [...appointmentDetails, newApp] : [newApp];
        
        await setDoc(doc(db, "appointments", uId), { Appointments: updatedAppointments });
        
        const updatedBookedSlots = [...bookedSlots, newApp.time];
        setBookedSlots(updatedBookedSlots);
        localStorage.setItem("bookedSlots", JSON.stringify(updatedBookedSlots)); // Save to local storage

        setOpen(!open);
    };

    const handleNewOpen = () => {
        setOpen(!open);
        navigate("/home");
    };

    useEffect(() => {
        getAppointments();
        setTimeout(() => setIsLoading(false), 1000);
        setNewApp(prev => ({
            ...prev,
            name: state.name,
            speciality: state.spec
        }));
    }, []);

    useEffect(() => {
        setNewApp(prev => ({
            ...prev,
            date: value.getDate(),
            month: yearObj[value.getMonth()],
            day: dayObj[value.getDay()]
        }));
    }, [value]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className='h-[100vh] gradient_wall p-4 flex items-start justify-center w-[100vw]'>
            <div className='w-[100%] space-y-3'>
                <div className='flex items-centre justify-start'>
                    <img onClick={() => { navigate(-1) }} src={leftarrow} alt="Back" />
                </div>
                <div className='flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold'>Detail Doctor</h1>
                </div>
                <div className='flex items-center gap-4 justify-center'>
                    <div>
                        <div className='flex items-center justify-center'><img src={docphoapp} alt="Doctor" /></div>
                    </div>
                    <div>
                        <div className='flex items-center justify-center'><h1 className='font-semibold'>{state.name}</h1></div>
                        <div className='flex items-center justify-center'><h2>{state.spec}</h2></div>
                        <div className='flex items-center justify-center'>{state.hosp}</div>
                        <div className='flex items-center justify-center'>{state.rating}</div>
                    </div>
                </div>
                <div className='flex items-centre justify-start text-2xl font-bold'>Select Date</div>
                <div className='flex items-start justify-center w-[100%] h-[285px]'>
                    <div className='w-fit'>
                        <Calendar onChange={onChange} value={value} />
                    </div>
                </div>
                <div className='flex items-centre justify-start text-2xl font-bold'>Select time</div>
                <div className='w-[100%] flex flex-wrap gap-2'>
                    {timeSlots.map((time, index) => (
                        !bookedSlots.includes(time) && (
                            <div key={time} className={`border-2 border-[#8771EB] rounded-lg p-2 ${active === index + 1 ? 'bg-blue-500' : ''}`}>
                                <button onClick={() => {
                                    setActive(index + 1);
                                    setNewApp(prev => ({ ...prev, time }));
                                }}>
                                    {time}
                                </button>
                            </div>
                        )
                    ))}
                </div>
                <div className='w-[100%] flex items-center justify-center'>
                    <div className='mt-[15px] flex rounded-lg p-3 w-[80%] items-center justify-center'>
                        <Button onClick={handleOpen} className='gradient_button shadow-md drop-shadow-md'>Book Appointment</Button>
                        <Dialog open={open} handler={handleOpen}>
                            <DialogHeader>Your Appointment Booked Successfully</DialogHeader>
                            <DialogBody>
                                Details Are Follow:<br />
                                Date: {newApp.date}<br />
                                Day: {newApp.day}<br />
                                Time: {newApp.time}<br />
                                Doctor: {newApp.name}<br />
                            </DialogBody>
                            <DialogFooter>
                                <Button variant="gradient" color="green" onClick={handleNewOpen}><span>Confirm</span></Button>
                            </DialogFooter>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
