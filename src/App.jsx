import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>

    </Router>
    
  );
}

export default App;
