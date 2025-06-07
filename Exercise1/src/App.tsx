import './App.css'
import { BlogPost } from './components/Blogpost'
import Button from './components/Button'
import { Heading } from './components/Heading'
import { Person } from './components/Person'

function App() {


  return (
    <>
      {/* <Heading text='Zdravo rale'/>
      <Person  name={"Hristijan"} age={24} isDeveloper={false} /> */}

    <BlogPost />

      {/* <Button label='Click Me 1' />
      <Button label='Click Me 2' />
      <Button label='Click Me 3' />
      <Button label='Click Me 4' /> */}
    </>
  )
}

export default App
