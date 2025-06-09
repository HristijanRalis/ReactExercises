import { useState } from "react"
import "../styles/Button.css";
export const Counter = () => {
const [count , setCount] = useState(0)
    // LOGIC
const handleIncrement = () =>{
  setCount(count + 1);
}
const handleDecrement = () => {
    setCount(count - 1)
}
    // RENDER BUTTON
  return (
    <>
    <p>Counter is: {count}</p>
    <button className="btn" onClick={handleIncrement}>Increment</button>
    <button className="btn" onClick={handleDecrement}>Decrement</button>


    </>
    
  )
}
