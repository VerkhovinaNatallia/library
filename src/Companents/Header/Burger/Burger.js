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

                <a className={style.menuItem} href ='#'>About the shelter</a>
                <a className={style.menuItem} href ='#'>Our pets</a>
                <a className={style.menuItem} href ='#'>Help the shelter</a>
                <a className={style.menuItem} href ='#'>Contacts</a>
        </div>
      )}
    </div>
  );
};



export default BurgerMenu;