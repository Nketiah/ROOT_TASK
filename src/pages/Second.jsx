import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Second = () => {
const [user, setUser] = useState({})

const navigate = useNavigate()

useEffect(()=> {
    loadUser()

    //check if Auth is true
   
}, [user])

const loadUser = () =>{
    const userData = JSON.parse(localStorage.getItem("user"))
    setUser(userData)
}

  return (
    <>
       <div style={{fontSize: 25}}>Email:  {user.email}</div>
       <div style={{fontSize: 25}}>Password:  {user.password}</div>
    </>
  )
}

export default Second