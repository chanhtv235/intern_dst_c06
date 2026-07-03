import React, { useState } from 'react'

import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import HeaderComponent from "./layout/HeaderComponent.jsx";
import {ToastContainer} from "react-toastify";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Dashboard from "./layout/Dashboard.jsx";
import Student from "./page/student/Student.jsx";
import Add from "./page/student/Add.jsx";
function App() {

  return(
      <>
          <ToastContainer/>
          <HeaderComponent />
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/about'} element={<About/>}/>
              <Route path={'/dashboard'} element={<Dashboard/>}>
                  <Route path={'student'} element={<Student/>}/>
                  <Route path={'teacher'} element={<Student/>}/>
                  <Route path={'student/add'} element={<Add/>}/>
              </Route>
          </Routes>
      </>
  )
}

export default App
