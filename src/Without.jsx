import React, { useState } from 'react'

const Without = () => {
    const [text , setText] = useState('create')
  return (
    <div>
      <First value={text}></First>
    </div>
  )
}
const First = ({value}) =>{
    return(
        <>
            <h1>{value}</h1>
        </>
    )
}
export default Without
