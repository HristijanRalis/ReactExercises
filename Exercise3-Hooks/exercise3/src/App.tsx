import { useState } from 'react'

import './App.css'
import { Button } from './components/Button'
import { Counter } from './components/Counter'
import { BlogPosts } from './components/BlogPosts'
import { Person } from './components/Person'
import { Message } from './components/Message'
import { Timer } from './components/Timer'

function App() {
 

  return (
    <>
    <h1>HOOKS</h1>
    {/* <BlogPosts />
      <Button />
      <Counter />
      <Person />

      <Message /> */}
      <Timer />
    </>
  )
}

export default App
