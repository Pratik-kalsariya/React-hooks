import React, { createContext, useContext, useState } from 'react'
import Third from './Third'
import Mycontext from './First'

const usercontext = createContext()

const Second = () => {
    const [count , setCount] = useState(0)
    // const [data ,setData] = useState()
    const I1 =() =>{
        setCount(count+1)
     
    }
    const I2=()=> {
        setCount(count-1)
  
    }
  return (
    
      <Mycontext.Provider value={{count,I1,I2}}>
        <Third></Third>
      </Mycontext.Provider>
     )
}


export default Second
