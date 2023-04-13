import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar'
import './components/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Main />
      </Router>
    </>
  );
}

export default App;
