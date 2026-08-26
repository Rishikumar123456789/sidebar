import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from '../Pages/RegisterPage/RegisterPage'


const AppRoutes = () => {
  return(<BrowserRouter>
   <Routes>
    <Route path='/' element={<RegisterPage></RegisterPage>}></Route>
   </Routes>
  </BrowserRouter>)
}

export default AppRoutes
