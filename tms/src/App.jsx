
import Header from './component/header'
import Footer from './component/footer'
import Home from './pages/home'
import Signup from './pages/sign-up'
import Login from './pages/log-in'


import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/sign-up" element={<Signup></Signup>}></Route>
          <Route path="/log-in" element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>


    </>
  )
}

export default App
