import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Sidebar from "./components/UI/navigation/Sidebar";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import MyNotes from "./components/pages/MyNotes/MyNotes";
import ClassNotes from "./components/notes/ClassNotes";
import AddNotes from "./components/notes/AddNotes";
import Header from "./components/UI/navigation/Header.tsx";
import Statistics from "./components/pages/Statistics/Statistics";

function App() {
  return (
    <div className="mainContainer">
      <div>
        <Sidebar />
      </div>
     
      <div className="mainContents">
        <Header />
      
        <Routes>
          {/* <div className='container'> */}
          {/* <Route path='/myNotes' element={MyNotes} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/myNotes" element={<MyNotes />} />

          <Route path="/classNotes" element={<ClassNotes />} />
          <Route path="/addNotes" element={<AddNotes />} />
          <Route path="/stats" element={<Statistics />} />

          {/* </div> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
