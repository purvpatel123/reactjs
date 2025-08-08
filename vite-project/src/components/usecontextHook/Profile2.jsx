import React from 'react'
import UserContext from './UserContext'
import { useContext } from 'react'
function Profile2() {
    const {user,setUser}=useContext(UserContext)
  return (
    <>
    <div>Profile2</div>
    <h1>name:{user.name}</h1>
    <button onClick={()=>{
        setUser({...user,name:"diya"})
    }}>change</button>
</>
  )
}

export default Profile2