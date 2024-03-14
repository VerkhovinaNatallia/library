import React, { useState } from 'react';
import style from './Burger.module.css'



const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.block}>
      <button className={style.button} onClick={toggleMenu}>
        <div className={style.buttonBorder} />
        <div className={style.buttonBorder} />
        <div className={style.buttonBorder} />
      </button>
      {isOpen && (
        <div className={style.menu}>

                <a className={style.menuItem} href ='#about'>About</a>
                <a className={style.menuItem} href ='#favorites'>Favorites</a>
                <a className={style.menuItem} href ='#coffee'>Coffee shopr</a>
                <a className={style.menuItem} href ='#contacts'>Contacts</a>
                <a className={style.menuItem} href ='#card'>Library Card</a>
        </div>
      )}
    </div>
  );
};



export default BurgerMenu;