import React, { useContext, useEffect } from 'react'
import Loader from '../components/Loader'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import Appointment from './Appointment';
import { getDoc } from "firebase/firestore";
import { useState } from 'react';
import authContext from '../context/authContext';

const Test = () => {
  const ID = localStorage.getItem("user-id")
  const [updated, setUpdated] = useState([])
  const {getAppointments, appointmentDetails, setappointmentDetails}=useContext(authContext)
  const app = {
    photourl: "xyy",
    name: "yoyoyo",
    speciality: "cardio",
    day: "Tuesday",
    date: "5th",
    month: "August",
    time: "4:00",
  }

  useEffect(() => {
    getAppointments()
  
    
  }, [])
  console.log(appointmentDetails)
  

  const handleClick = async () => {
   


    await setDoc(doc(db, "appointments", `${ID}`), {
      Appointments: [
        ...appointmentDetails,
        app
      ]
    })
    console.log("add")
  }

  return (
    <div>
      <button onClick={handleClick} >Add</button>
      <button >Get</button>
    </div>
  )
}

export default Test