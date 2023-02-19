import React from 'react'
import "./Welcome.css"
import {useNavigate} from "react-router-dom" 
import { v4 as uuidv4 } from 'uuid';


function Welcome() {
let navigate = useNavigate() 

    


  return (
   <body className='bg'>
   <div className='main'>
   <h1>Welcome</h1>
   <button className="btn" onClick ={()=>{localStorage.setItem('user-id', JSON.stringify(uuidv4())); navigate("/survey")}}> 
   Let's Start!
   </button> 
   </div>
   </body>
 
    
  )
}

export default Welcome