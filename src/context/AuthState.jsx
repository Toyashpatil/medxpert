import React from 'react'
import authContext from './authContext'
import { useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';
const AuthState = ({ children }) => {
  const [uid, setUid] = useState("");
  const [initialUserDet, setinitialUserDet] = useState()
  const [healthDetails, setHealthDetails] = useState({})

  const getData = async () => {
    let uId = localStorage.getItem('user-id');
    const docRef = doc(db, "users", `${uId}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data()
      setinitialUserDet(userData)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  return (
    <authContext.Provider value={{ uid, setUid, initialUserDet, setinitialUserDet, getData, healthDetails, setHealthDetails }} >
      {children}
    </authContext.Provider>
  )
}

export default AuthState