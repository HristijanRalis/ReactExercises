import { useState } from "react"
import "../styles/Button.css";
export const Button = () => {
const [count , setCount] = useState(0)
    // LOGIC
const handleClick = () =>{
    console.log("Button Click")
}

    // RENDER BUTTON
  return (
    <>
    <button className="btn" onClick={handleClick}>Button</button>
    </>
    
  )
}
