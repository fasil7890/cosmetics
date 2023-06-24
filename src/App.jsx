import React from 'react'
import Navbar from './components/Navbar/Navbar';
import "./App.css"
import Intro from './components/Intro/Intro';
import Products from './components/Products/Products';
import ImageSlide from './components/ImageSlide/ImageSlide';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      
    <Navbar/>
    <Intro/>
    <Products/>
    <ImageSlide/>
    <Footer/>
    </div>
  )
}

export default App