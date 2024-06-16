import React from 'react'

import './index.css'; 
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { store } from './store';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';


function App() {
  

  return (
    <>
    
   <Provider store={store}>
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element = {<HomePage/>}/>
            <Route path="/cart" element={<CartPage/>} />
          </Routes>
        </div>
      </Router>
    </Provider>  
      
  
      
    </>
  )
}

export default App
