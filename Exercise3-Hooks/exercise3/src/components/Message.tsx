import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [message, setMessage ] = useState<string | undefined>(undefined);

    useEffect(()=> {
        const timer = setTimeout(()=>{
            setMessage("Igor ralevski")
        }, 3000)

        return () => {
            clearInterval(timer);
            setMessage(undefined);
        }
    }, [])


  return (
    <div>Message: {message}</div>
  )
}
