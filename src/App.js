import React from 'react'
import Header from './components/header/header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; 
import Bio from './components/home/bio';

const App = () => {
  return (
     <>
     <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<Bio />} />
      </Routes>
    </Router>
     </>
  )
}

export default App;
