import React, { useRef } from 'react'

const UseRefExample = () => {


    const btnref = useRef()

    const inpref = useRef()

    const handleChange = () => {
        btnref.current.style.color="red"
    }

    const handleinput = () => {
        inpref.current.style.backgroundColor = "black"
        inpref.current.style.color="red"
    }


  return (
    <div>

        <input type="text" name="" ref={inpref} id="" onChange={handleinput} />

        <button ref={btnref} onClick={handleChange}>Click</button>
    </div>
  )
}

export default UseRefExample
