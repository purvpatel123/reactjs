import React from 'react'
import UserContext from './UserContext'
import { useContext } from 'react'
function Profile() {
    const {user,setUser}=useContext(UserContext)
  return (
    <>
    <div>
        <h1>name:{user.name}</h1>
        <h2>age:{user.age}</h2>
        <input type='number'
        value={user.age}
        onChange={(e)=>{
            setUser({ ...user,age:e.target.value})
        }
        }/>
    </div>

    </>
  )
}

export default Profile