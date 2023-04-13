import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar'
import Home from './components/Home'
import './components/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/pokemon' element={<Main />}/>
      </Routes>
      {/* <Home /> */}
      </Router>
    </>
  );
}

export default App;
