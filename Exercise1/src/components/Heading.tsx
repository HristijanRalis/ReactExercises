import React from 'react'
interface HeadingProps {
  text?: string;
}

export const Heading = ({text} : HeadingProps) => {
  //const {text} = props
  return <h1>{text}</h1>
  
}
