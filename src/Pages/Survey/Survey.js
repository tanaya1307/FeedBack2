import React from 'react'
import { useState } from 'react'
import Count from '../../components/Count/Count';
import Rating from '../../components/Rating/Rating';
import "./Survey.css"
import {useNavigate} from "react-router-dom" 


const questions=[
    {
        id:1,
        question:"How satisfied are you with our products?"
    },
    {
        id:2,
        question:"How fair are the prices compared to similar retailers?"
    },
    {
        id:3,
        question:"How satisfied are you with the value for money of your purchase?"
    },
    {
        id:4,
        question:"On a scale of 1-10 how would you recommend us to your friends and family?"
    },
    {
        id:5,
        question:"What could we do to improve our service? "
    }
]

function Survey() {
    const [id,setId]=useState(1);
    const [type,setType]=useState('rating')
    const scale1=[1,2,3,4,5];
    const scale2=[1,2,3,4,5,6,7,8,9,10];
    const [scale,setScale]=useState(scale1);
    let navigate = useNavigate()
    
    function handleNext(){
       
      
        if(id===5)

        {   setId(1)
            navigate('/thanks')
        }
        if(id<5)
        {
            setId(id+1);
        }
        if(id===3)
        {
            setScale(scale2)
        }
        if(id===4)
        {   
            setType('text')
        }
        

    }
    function handlePrev()
    {      if(id>=1)
             {
                setId(id-1)
             }
             if(id===1)
             {
                setId(1)
             }
    }

   const user=localStorage.getItem('user-id')
   
  return (
    <>
    <div className='main-div'>
    <div className='modal'>
        <div className='question'>
        {questions[id-1].question}
        <div className='count'><Count count={id} total={questions.length}/></div>
        </div>
       
       <div className='Rating'> <Rating scale={scale} inputType={type} user={user} id={id}/></div>
       <div className='btns'>
         <br />
     <button className='nav-btn' onClick={handlePrev}>previous</button>
    
    <button className='nav-btn' onClick={handleNext}>next</button>
       </div>
     </div>
    </div>
    
    </>
   

    
  )
}

export default Survey