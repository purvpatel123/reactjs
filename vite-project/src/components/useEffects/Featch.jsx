import React, { useState } from 'react'
import { useEffect } from 'react'
function Featch() {

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((Response) => ( Response.json() ))
            .then((data) => (setUser(data) ))
            .catch((error) => ( console.log(error) ))

    }, [])
    return (
        <>
            <div>Featch</div>
           <ul>
            {user.map(use=>(
                <li key={use.id}>{use.name}</li>
            ))}
           </ul>
        </>
    )
}

export default Featch