import React from 'react'
import {Navbar} from './Components/yindex'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home} from './Pages/zindex'
import {AboutUs} from './Pages/zindex'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
     
    </Routes>
   </BrowserRouter>

   </>
  )
}

export default App
