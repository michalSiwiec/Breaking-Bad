import React from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import {BrowserRouter} from 'react-router-dom'


const App = () => {
  return(
    <BrowserRouter>
      <Menu/>
      <MainContent/>
      <Footer/>
    </BrowserRouter>
  )
}



export default App;
