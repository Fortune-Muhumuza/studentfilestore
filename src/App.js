import { Routes, Route,  } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/UI/Sidebar'
import Dashboard from './components/notes/Dashboard'
import MyNotes from './components/notes/MyNotes'
import ClassNotes from "./components/notes/ClassNotes";
import AddNotes from "./components/notes/AddNotes";

function App() {
  return (
    <div className='mainContainer'>
      <div>
    <Sidebar />
    </div>
    <div>
    <Routes>
    {/* <div className='container'> */}
    {/* <Route path='/myNotes' element={MyNotes} /> */}
    <Route path='/' element={<Dashboard />} />
    <Route path='/myNotes' element={<MyNotes />} />
    
    <Route path='/classNotes' element={<ClassNotes />} />
    <Route path='/addNotes' element={<AddNotes />} />
    

    {/* </div> */}
    </Routes>
    </div>
    </div>
  )
}

export default App