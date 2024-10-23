import './App.css'
import TopBar from './topbar/TopBar.jsx'
import Education from './education/Education.jsx'
import Experience from './experience/Experience.jsx'
import Projects from './projects/Projects.jsx'
import About from './About/About.jsx'
import Contact from './contact/Contact.jsx'
function App() {


  return (
    <>
    <TopBar/>

    <main>
    <About/>
    <Experience/>
    <br></br>
    <Education/>
    <br></br>
    <Projects/>
    <br></br>
    <Contact/>
    <br></br>
    <br></br>
    <p>© 2024 Sebastian Skonieczny</p>
    </main>
    </>
  )
}

export default App
