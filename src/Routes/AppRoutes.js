import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage/LandingPage'

const AppRoutes = () => {
  return(<BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage></LandingPage>} ></Route>
   </Routes>
  </BrowserRouter>)
}

export default AppRoutes
