import React from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import {BrowserRouter,Link,NavLink,Route} from 'react-router-dom'

/*
  I don't need keep selectedMenuOption and Menu classes in state because this tool gives me .active.
   I'll made a decision based path  

  Instead of this I have to create menu 
  <li>
    <Link path = "sadasdasd"/>
  </li>
  <li>
    <Link path = "sadasdasd"/>
  </li>
  <li>
    <Link path = "sadasdasd"/>
  </li>
  <li>
    <Link path = "sadasdasd"/>
  </li>

  Nothing hang down to MainContent


  Surely i don't need event state? Because React router' ll be resposibly for select suit content


*/


class App extends React.Component {

  render(){

    return (
      <BrowserRouter>
        <Menu/>
        {/* <MainContent selectedOption={this.state.selectedMenuOption}/> */}
        <Footer/>
      </BrowserRouter>
    );
}
  
}

export default App;
