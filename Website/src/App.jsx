import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Menu from './components/Menu.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
 <div className='App'>
  <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/menu' element={<Menu/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} /> 
  </Routes>
  <Footer/>
 </div>
  )
}

export default App
