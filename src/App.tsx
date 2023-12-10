import './App.css'
import ProjectCard from './ProjectCard'

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><button>Home</button></li>
        <li><button>Projects</button></li>
      </ul>
    </nav>
      <header>
        <h1>Alexander Cowley</h1>
        <p>Unity, C# and React Developer</p>
      </header>
      <main>
        <article className='headerSection'>
          <h1>About Me</h1>
          <p>Solution-driven front-end engineer adept at contributing to a highly 
            collaborative work environment, 
            finding solutions, and determining customer satisfaction.</p>
            <p>Hello, I am Alexander Cowley. I graduated from the University 
              of Texas at Dallas with a Bachelor's in Arts, Technology and 
              Emerging Communication.</p>
            <p>I am a self-motivated programmer that makes applications that 
              are engaging or helpful. I make games with Unity and C# 
              and Websites with React.</p>
        </article>
      <article className='headerSection'>
          <h1>Projects</h1>
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
        </article>
        <article className='headerSection'>
          <h1>Education</h1>
        </article>
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
