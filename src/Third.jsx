import React, { createContext, useContext, useState } from 'react'
import Mycontext from './First'

const usercontext = createContext()
const Third = () => {
    
    const {count,I1,I2} = useContext(Mycontext)
  return (
    <div>
    
            <button onClick={I1}>Increment</button>
            <h1>{count}</h1>
            <button onClick={I2}>Decrement</button>
        
    </div>
  )
}

export default Third
