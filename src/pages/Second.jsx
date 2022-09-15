import React, { useEffect, useState } from 'react'

const Second = () => {
const [user, setUser] = useState({})

useEffect(()=> {
    loadUser()
}, [])

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