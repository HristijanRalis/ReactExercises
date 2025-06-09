import { useState } from 'react'

import './App.css'
import { Button } from './components/Button'
import { Counter } from './components/Counter'
import { BlogPosts } from './components/BlogPosts'

function App() {
 

  return (
    <>
    <h1>HOOKS</h1>
    <BlogPosts />
      <Button />
      <Counter />
    </>
  )
}

export default App
