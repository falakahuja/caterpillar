import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  return (
    <Router>
     <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<page1/>} />
      </Routes>
      <Footer />
     </div>
    </Router>
  )
}

export default App
