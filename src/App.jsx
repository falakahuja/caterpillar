import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Landing from './Pages/Landing';
import Predict from './Pages/Predict';

function App() {

  return (
    <Router>
     <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/getstarted" element={<Predict/>} />
      </Routes>
      <Footer />
     </div>
    </Router>
  )
}

export default App
