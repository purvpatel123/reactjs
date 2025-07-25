import React, { useState } from 'react'
import { useMemo } from 'react'
function SumCalculate() {

    const [num, setNum] = useState(0)
    const sum = useMemo(() => {
        let total = 0;
        for (let i = 0; i <= num; i++) {
            total += i;
        }
        return total;

    }, [num])

    return (
        <>
            <div>

                <input type='number' value={num} onChange={(e) => {
                    setNum(e.target.value)
                }}></input>
                <p>sum of {num} number is {sum}</p>
            </div>
        </>
    )
}

export default SumCalculate