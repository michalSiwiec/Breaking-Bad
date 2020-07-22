import React from 'react';
import './Menu.css';
import MenuOption from "./MenuOptions/MenuOption";

const Menu = () => {

    return(
        <nav className="menuNav">
            <div>
                <ul>
                    <MenuOption value="Strona główna" path="/"/>
                    <MenuOption value="Fabula" path="/Story"/>
                    <MenuOption value="Ogladaj" path="/Watch"/>
                    <MenuOption value="Galeria" path="/pictureGallery"/>
                </ul>
            </div> 
        </nav>
    )
}

export default Menu;


