import React, { useState, useEffect } from 'react';
import './rating_button.css';

function Rating(props) {
  const [rate, setRate] = useState({ 1: '', 2: '', 3: '', 4: ''});
  const [suggestion,setSuggestion]=useState('');
  const user = props.user;
  const type = props.inputType;
 
  const handleMessageChange = event => {
   
    setSuggestion(event.target.value);
   
  };

  const handle = (i) => {
    
    setRate({ ...rate, [props.id]: i });
  };

  

  useEffect(() => {
    localStorage.setItem(user, JSON.stringify([rate,suggestion]));
  }, [rate, suggestion,user]);
  
 

 
  if (type === 'text') {
    return (
      <>
        <textarea  onChange={handleMessageChange} />
      </>
    );
  }
  return (
    <>
      {props.scale.map((i) => {
        return (
          <button className='rbtn' onClick={() => handle(i)}>
            {i}
          </button>
        );
      })}
    </>
  );
}

export default Rating;

