import React, { useEffect, useState } from 'react'
import "../styles/Button.css"
export const Timer = () => {
const [date, setDate] = useState<Date | undefined>(new Date());
const [isRunning, setRunning] = useState<boolean>(true);
 function handleStopOrPlay (){
    
    setRunning(!isRunning)

 }

 useEffect(()=>{
   const interval= setInterval(() => {
    if(!isRunning) return
        setDate(new Date());
    },1000);


  return() => {
        clearInterval(interval);
    }
  
    
 }, [isRunning]);

  return (
    <div>
        <p>Timer: {date?.toLocaleTimeString()}</p>
        <button className='btn' onClick={handleStopOrPlay}>{isRunning? 'Pause time': 'Start time'}</button>
    </div>
   
  )
}
