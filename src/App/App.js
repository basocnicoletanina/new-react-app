import React from 'react';
import './App.css';
import Header from "../Header/header.js";
import Home from "../Home/home.js";
import Footer from "../Footer/footer.js"

function App() {
  return (
    <div className="app">
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
    </div>
  );
}

export default App;
