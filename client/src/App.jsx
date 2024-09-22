import { BrowserRouter, Routes, Route } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './pages/Home'
import SignIn from './pages/Signin'
import About from './pages/about'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Header from './Components/Header'
export default function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/sign-in' element={<SignIn />}></Route>
      <Route path='/sign-up' element={<SignUp />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
    </BrowserRouter>
  )
}
