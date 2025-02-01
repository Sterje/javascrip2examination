import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/pages/Home'
import { Me } from './components/pages/Me'
import { About } from './components/pages/About'
import { Projects } from './components/pages/Projects'

function App() {
    
    return (
    
    <section className='App'><Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/me" element={<Me />} />
        <Route path="/projects" element={<Projects />} />     
      </Routes>
    </section>

    
  )
}

export default App
