import React from 'react';
import './Menu.css';
import MenuOption from "./MenuOptions/MenuOption";

const Menu = (props) => {

    // console.log(props);
    const {selectOption,menuOptionClasses} = props;

    return(
        <nav>
            <div>
                <ul>
                    <MenuOption value="Strona główna" clickMenuOption={selectOption} id="menuOption1" classes={menuOptionClasses[0]}/>
                    <MenuOption value="Fabula" clickMenuOption={selectOption} id="menuOption2" classes={menuOptionClasses[1]}/>
                    <MenuOption value="Ogladaj" clickMenuOption={selectOption} id="menuOption3" classes={menuOptionClasses[2]}/>
                    <MenuOption value="Galeria" clickMenuOption={selectOption} id="menuOption4" classes={menuOptionClasses[3]}/>
                </ul>
            </div> 
        </nav>
    )
}

export default Menu;


