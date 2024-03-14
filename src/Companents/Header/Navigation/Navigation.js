import React from "react";
import style from './Navigation.module.css'
import NavigationObj from "../NavigationObj";

const Navigation = ()=>{
    
    const navItem = NavigationObj.map((item)=>
        
        <li className={style.item}> 
            <a key={item.id} href={item.name} className={style.link}>{item.text}</a>
        </li>
    )
    
    return(
        <nav className={style.navigation}>
            <ul className={style.list}>
                {navItem}
            </ul>

        </nav>

)
}

export default Navigation;