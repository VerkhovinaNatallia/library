import React from "react";
import style from "./LibraryCard.module.css"
import { Link } from "react-router-dom";


const LibraryCard=()=>{
    

    return(
        <section className={style.section} id="card">
            <h2 className={style.title}>
            Digital Library Cards
            </h2>
            <hr/>
            <div className={style.block}>
                <div className={style.card}>
                    <h3 className={style.cardTitle}>Find your Library card</h3>
                    <div className={style.cardBlock}>
                        <div className={style.cardGold}>
                            <p className={style.cardText}>Brooklyn Public Library</p>
                            <input className={style.cardName} value="Reader's name"/>
                            <input className={style.cardNumber} value='Card number'/>
                        </div>
                            <button className={style.button}> Check the card</button>
                    </div>
                
                
                </div>
                <div className={style.getcard}> 
                    <h3 className={style.getcardTitle}>Get a reader card</h3>
                    <p className={style.getcardText}> You will be able to see a reader card after logging into account or you can register a new account</p>                
                    <div className={style.getcardBtn}>
                        <Link to="/library/register"><button className={style.btn}>Sign Up</button> </Link>
                        <Link to="/library/login"><button className={style.btn}>Log In </button></Link>
                    </div>
                <div/>
            </div>
            </div>
        </section>
    )
}

export default LibraryCard; 