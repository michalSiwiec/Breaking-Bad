import React from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedMenuOption: 1,
      menuOptionClasses: ["selected",undefined,undefined,undefined]
    }
  }

  selectMenuOption = (e) => {
    
    let menuOptionBuffor,
    menuOptionClassesBuffor = [undefined,undefined,undefined,undefined];

    switch(e.target.id){

      case "menuOption1":
        menuOptionBuffor = 1;
        menuOptionClassesBuffor[0] = "selected";
        break;

      case "menuOption2":
        menuOptionBuffor = 2;
        menuOptionClassesBuffor[1] = "selected";
        break;

      case "menuOption3":
        menuOptionBuffor = 3;
        menuOptionClassesBuffor[2] = "selected";
        break;

      case "menuOption4":
        menuOptionBuffor = 4;
        menuOptionClassesBuffor[3] = "selected";
        break;

      default:
        break;

    }

    this.setState({
      selectedMenuOption: menuOptionBuffor,
      menuOptionClasses: menuOptionClassesBuffor
    })

  }


  render(){

    return (
      <>
        <Menu selectOption={this.selectMenuOption} menuOptionClasses={this.state.menuOptionClasses}/>
        <MainContent selectedOption={this.state.selectedMenuOption}/>
        <Footer/>
      </>
    );
}
  
}

export default App;