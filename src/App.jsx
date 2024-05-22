
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
      </Routes>
      <Footer />
    </>
  )

}

export default App
