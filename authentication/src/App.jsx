import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Notfound from './pages/Notfound'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/signup" element={<Signup/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="*" element={<Notfound/>}/>
      </Routes>
    </Router>
  )
}

export default App
