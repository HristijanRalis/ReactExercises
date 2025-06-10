import React, { cache, useEffect, useState } from 'react'

export const Person = () => {

    const [name, setName] = useState("Hristijan Ralevski");


    useEffect(() => {
       try{
        const fetchData = async () =>{
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await response.json();
            setName(data.name)
        }

        fetchData()
       }catch(e){
        console.error(e);
       }

    }, [])
  return (
    <div>Person name is: {name}</div>
  )
}
  