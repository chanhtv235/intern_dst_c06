import React, { useState } from 'react'

import './App.css'
import {getAll} from "./service/studentService.js";
import "bootstrap/dist/css/bootstrap.css"
import HeaderComponent from "./components/layout/HeaderComponent.jsx";
import ListComponent from "./components/student/ListComponent.jsx";

function App() {

  return(
      <>
          <HeaderComponent />
          <ListComponent/>
      </>
  )
}

export default App
