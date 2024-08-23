import React, { createContext, useContext, useState } from 'react'
const usercontext = createContext()
const With = () => {
  
  const [text,setText]= useState('hello')
  return (
    <div>
        <usercontext.Provider value={text}>
            <P1></P1>
        </usercontext.Provider>
    </div>
  )
}
const P1=()=>{
  const data = useContext(usercontext)
  return(
    <>
      <h1>{data}</h1>
    </>
  )
}
export default With
