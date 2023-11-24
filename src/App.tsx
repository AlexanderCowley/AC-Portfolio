import { useState } from 'react'
import './App.css'
import ProjectCard from './ProjectCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <hr />
        <h1>About Me</h1>
      </header>
      <main>
        <h1>Hi there!</h1>
        <ProjectCard projectName='Glube'/>
        <ProjectCard projectName='Blobe'/>
        <ProjectCard projectName='Snoob'/>
      </main>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
