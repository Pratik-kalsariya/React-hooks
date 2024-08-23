import React, { createContext, useState } from 'react'
import Mycontextt from './Contexx'
import Forms from './Forms'

const usercontext = createContext()
const Data = () => {
    const [data1 ,setData1] = useState([])
    const handleDisplay =(value ,{resetForm})=>{
        setData1([...data1,value])
        resetForm()
    }
   
    
  return (
    <Mycontextt.Provider value={{data1 ,handleDisplay}}>
        <Forms></Forms>
    </Mycontextt.Provider>
  )
}

export default Data
