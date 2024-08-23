import React, { createContext, useContext, useState } from 'react'
import { Field,Formik,Form } from 'formik'
import Mycontextt from './Contexx'

const usercontext = createContext()



const Forms = () => {
  const [initialvalue ,setInitialvalue] = useState({
    FirstName : '',
    LastName : '',
    ID :'',
    Password :''
  })
  const {data1 ,handleDisplay} = useContext(Mycontextt)
  return (
    <div>
        <Formik 
          initialValues={initialvalue}
          onSubmit={(handleDisplay)}
        >
            <Form>
                FirstName :-<Field type="text" name="FirstName"></Field><br />
                LastName :-<Field type="text" name="LastName"></Field><br />
                Id :-<Field type="text" name="ID"></Field><br />
                Password :-<Field type="text" name="Password"></Field><br />    
                <button type='submit'>Submit</button>
            </Form>    
        </Formik>

        <table border={1}>
            <tr>
              <td>FirstName</td>
              <td>LastName</td>
              <td>ID</td>
              <td>Password</td>
            </tr>
            {
              data1.map((el,i) => (
                <tr>
                  <td>{el.FirstName}</td>
                  <td>{el.LastName}</td>
                  <td>{el.ID}</td>
                  <td>{el.Password}</td>
                </tr>
              ))
            }
        </table>
    </div>
  )
}

export default Forms
