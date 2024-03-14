import React from "react";
import style from './Header.module.css';
import Navigation from "./Navigation/Navigation";
import Burger from "./Burger/Burger";
import Login from "./Login/Login";



const Header=()=>{


    return(
        <header className={style.block}>
            <div className={style.wrapper}>
                    <h2 className={style.title}>Brooklyn Public Library </h2>
                    <hr/>
                    <div className={style.navigation}>
                    <Navigation/>
                    <Login/>
                    <Burger/>
                    </div>
            </div>
        </header>
    )
}

export default Header;