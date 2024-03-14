import React from "react";
import style from './Cofee.module.css';
import CofeeArr from "./CofeeArr";
import DesertArr from "./DesertArr";

const Cofee =()=>{
    const CofeeItem = CofeeArr.map((item)=>
            <li className={style.menuItem}>
            <p className={style.menuName}>{item.name}</p>
            <div>
                <hr/>
                <p className={style.menuPrice}>${item.price}</p>
            </div>

        </li>
)
const DesertItem = DesertArr.map((item)=>
        <li className={style.menuItem}>
            <p className={style.menuName}>{item.name}</p>
            <hr/>
            <p className={style.menuPrice}>${item.price}</p>
        </li>
)

    return(
        <section className={style.section} id="coffee">
<h2 className={style.title}>Coffee shop</h2>
<hr/>
<p className={style.text}>
In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly conversation. 
<br/>You can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and also you can try desserts from bakery.
</p>
<div className={style.menu}>
<div className={style.menuBlock}>
    <h3 className={style.menuTitle}>Coffee & Tea  </h3>
    
    <ul className={style.menuList}>
        {CofeeItem}
    </ul>
</div>
<div className={`${style.menuBlock} ${style.menuAdap}`}>
    <h3 className={style.menuTitle}>Desserts & Cakes  </h3>
    <ul className={style.menuList}>
        {DesertItem}
    </ul>
</div>
</div>


        </section>
    )
}


export default Cofee;