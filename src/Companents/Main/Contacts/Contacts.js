import React from "react";
import style from './Contacts.module.css'
import image from './Rectangle 4.png'

const Contacts = ()=>{

    return(
        <section className={style.section} id="contacts">
            <h2 className={style.title}>Our Contacts</h2>
            <div className={style.block}>
                <div className={style.contact} >
                    <h3 className={style.contactTitle}>For all Library inquiries:</h3>
                    <div className={style.contactsBlock}>
                    <a  href="tel:+76177302370" className={style.contactLink}>Please call (617) 730-2370</a>
                    <a  href="tel:+76177302370" className={style.contactLink}>For TTY service, please call (617) 730-2370</a>
                    <a  href="tel:+76177302385" className={style.contactLink}>Putterham Library: (617) 730-2385</a>

                    </div>
                    <h3 className={style.contactTitle} >Senior Staff</h3>
                    <p className={style.contactText}>Library Director:<span className={style.contactSpan}>Amanda Hirst</span></p>
                </div>
                <div className={style.map}>
                    <a href="https://yandex.by/maps/202/new-york/geo/cadman_plaza_west/2510200216/?ll=-73.990947%2C40.696053&z=17.49">
                        <img src={image} alt="maps"/>
                    </a>
                </div>
            </div>

            
        </section>
    )
}

export default Contacts;