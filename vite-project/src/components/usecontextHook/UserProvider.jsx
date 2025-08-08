import React, { useState } from 'react'

import UserContext from './UserContext'

function UserProvider({children}) {
    const [user,setUser]=useState({
        name:"purv",
        age:"21"
    })
  return (
   <>
 
   <UserContext.Provider value={{user,setUser}}>
   {children}
   </UserContext.Provider>
   </>
  )
}

export default UserProvider