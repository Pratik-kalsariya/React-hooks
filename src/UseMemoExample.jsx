import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {

    const [number , setNumber] = useState(0)

    const st = useMemo(() => {
        return number;
    })

  return (
    <div>
        <h1>{number}</h1>
        <h1>{st}</h1>

        <button onClick={() => setNumber(number+1)}>++++++</button>
        <button onClick={() => setNumber(number-1)}>-------</button>
    </div>
  )
}

export default UseMemoExample
