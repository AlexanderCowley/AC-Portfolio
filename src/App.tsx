import './App.css'
import ProjectCard from './ProjectCard'

function App() {
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
              <ProjectCard projectName='SSEN'/>
          </li>
          <li>
              <ProjectCard projectName='Something'/>
          </li>
        </ul>
      </main>
      <footer>
      <div style={{textAlign: 'left'}}>
          <p>&copy;AC</p>
      </div>
      </footer>
    </>
  )
}

export default App
