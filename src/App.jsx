
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home' 
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import {Toaster} from "react-hot-toast"



function App() {
  return (
<>
<div>
<Navbar />
<Home />
<About />
<Skills />
<Experience />
<Contact />
</div>
<Toaster /> 

</>
  )
}

export default App