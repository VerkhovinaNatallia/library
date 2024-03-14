import React from "react";
import style from './Welcome.module.css';


const Welcome =()=>{


    return(
        <section className={style.section} >
            <div className={style.wrapper}>
                <div className={style.block}>
                    <h2 className={style.title}>Welcome <br/>
to the Brooklyn <br/>Library  </h2>
                </div>
            </div>

        
        
        </section>
    )
}

export default Welcome;