import { useState } from 'react'


import LogIn from './Components/LogIn'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './Components/Admin'
import Forma from './Components/Forma'
import Edit from './Components/Edit'
import Registration from './Components/Registration'
import User from './Components/User'
import Protected from './Components/Protected'


function App() {


  return (
    <BrowserRouter>
    
    <>
    
    <Routes>
    <Route path='/' element={<LogIn />} />
    <Route path="/admin" element={<Protected />} /> 
    <Route path='/registration' element={<Registration />} />
    <Route path='/cform' element={<Forma />} />
    <Route exact path='/edit/:id' element={<Edit />} />
    <Route exact path='/user/:id' element={<User />} />
  
   </Routes>
  
    </>
    </BrowserRouter>

  )
}

export default App
