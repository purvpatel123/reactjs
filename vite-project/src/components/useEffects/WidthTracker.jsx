import React, { useEffect, useState } from 'react'

function WidthTracker() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {

        const handelSize = () => {
            setWidth(window.innerWidth)
        }

      window.addEventListener('resize', handelSize)

        return () => {
            window.removeEventListener('resize', handelSize)
        }

    }, [])
    return (
        <>
            <h1>{width}</h1>
        </>
    )
}

export default WidthTracker