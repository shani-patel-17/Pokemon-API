import React, { useEffect, useState } from 'react'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./components/style.css"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pokemon" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
