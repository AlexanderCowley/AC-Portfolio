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
        <ul className='horizontal'>
          <li>
              <ProjectCard projectName='Glube'/>
          </li>
          <li>
              <ProjectCard projectName='Blobe'/>
          </li>
          <li>
              <ProjectCard projectName='Snoob'/>
          </li>
        </ul>
        
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
