import React, { useContext, useEffect } from 'react'
import Loader from '../components/Loader'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import Appointment from './Appointment';
import { getDoc } from "firebase/firestore";
import { useState } from 'react';
import authContext from '../context/authContext';
import { collection, query, where, getDocs } from "firebase/firestore";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Test = () => {
  const ID = localStorage.getItem("user-id")
  const [updated, setUpdated] = useState([])
  const { getAppointments, appointmentDetails, setappointmentDetails } = useContext(authContext);
  // const [docDetails, setDocDetails] = useState([])
  const Doc = [{ name: "Dr. Patil", specialization: "Dermatologist", rating: "4.5★ (120 reviews)", hospital: "Fortis" },
  { name: "Dr. Smith", specialization: "Cardiologist", rating: "4.8★ (200 reviews)", hospital: "Fortis" },
  { name: "Dr. Johnson", specialization: "Pediatrician", rating: "4.7★ (150 reviews)", hospital: "Fortis" },
  { name: "Dr. Brown", specialization: "Orthopedic Surgeon", rating: "4.6★ (180 reviews)", hospital: "Fortis" },
  { name: "Dr. Martinez", specialization: "Neurologist", rating: "4.9★ (220 reviews)", hospital: "Fortis" },
  { name: "Dr. Lee", specialization: "Ophthalmologist", rating: "4.6★ (160 reviews)", hospital: "Fortis" },
  { name: "Dr. Garcia", specialization: "Gynecologist", rating: "4.7★ (190 reviews)", hospital: "Fortis" },
  { name: "Dr. Robinson", specialization: "Endocrinologist", rating: "4.8★ (210 reviews)", hospital: "Fortis" },
  { name: "Dr. White", specialization: "Psychiatrist", rating: "4.9★ (230 reviews)", hospital: "Fortis" },
  { name: "Dr. Khan", specialization: "Gastroenterologist", rating: "4.5★ (140 reviews)", hospital: "Fortis" }]

  useEffect(() => {
    getAppointments()


  }, [])
  console.log(appointmentDetails)


  const handleClick = async () => {



    await setDoc(doc(db, "doctors", `${ID}`), {
      DocData: Doc
    })
    console.log("add")
  }

  const handleGet = async () => {

    // const querySnapshot = await getDocs(collection(db, "doctors"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   setDocDetails((prev) => {
    //     return ([...prev, ...doc.data().DocData])
    //   })
    //   console.log(doc.id, " => ", ...doc.data().DocData);
    // });

  }
  // console.log(docDetails);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Test