import React, { useState } from "react";
import style from './Burge1r.module.css';
import NavigationObj from "../NavigationObj";
// import Logo from "../../Logo/Logo";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Burger= ()=>{
    const [nav, setNav] = useState(false);

    const navItem = NavigationObj.map((item)=>
        
        <li className={style.item}> 
            <a key={item.id} href={item.name} className={style.link}>{item.text}</a>
        </li>
    )

    return (

        <div className={style.burger}>
            <AiOutlineClose/>
            {/* <Logo/> */}
            <ul
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            }
          >
            {navItem}

          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} className={style.svg} /> : <AiOutlineMenu size={25}  className={style.svg}/>}
          </div>
       
        </div>
    )
}

export default Burger;