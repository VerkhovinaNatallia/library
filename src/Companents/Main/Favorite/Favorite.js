
import React, { useState } from "react";
import FavoriteArr from "./FavoriteArr.js";
import style from './Favorite.module.css';
import { Link } from "react-router-dom";


const Svg = ()=>{
return(
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.5" cy="8.5" r="7.5" stroke="black" stroke-width="2" />
    </svg>

)
}
const SvgActiv =()=>{
    return(
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.5" cy="8.5" r="7.5" stroke="black" stroke-width="2" />
            <circle cx="8.5" cy="8.5" r="3.5" fill="black" />
        </svg>
    )
}


 const Favorite = () => {
    const [activeButton, setActiveButton] = useState(1);
    const [photo, setPhoto] = useState(FavoriteArr.filter((number) => number.category==='winter'));
    const handleButtonClick = (buttonId) => {
      setActiveButton(buttonId);
      if(buttonId===1){
        setPhoto(FavoriteArr.filter((number) => number.category==='winter'));
    }
    else if(buttonId===2){
        setPhoto(FavoriteArr.filter((number) => number.category==='spring'));
    }
    else if(buttonId===3){
        setPhoto(FavoriteArr.filter((number) => number.category==='sumer'));
    }
    else{
        setPhoto(FavoriteArr.filter((number) => number.category==='autumn'));
    }
      
    };



    return (
        <section className={style.section} id="favorites">
            <h2 className={style.title}>Favorites</h2>
            <hr/>
            <div className={style.wrapper}>
            <p className={style.text}>Pick favorites of season</p>
            <div className={style.seasons}>
                <button className={style.seasonsBtm} onClick={() => handleButtonClick(1)} >
                {activeButton === 1 ? <SvgActiv/> : <Svg/>}Winter
                    </button>
                <button className={style.seasonsBtm}  onClick={() => handleButtonClick(2)}>
                {activeButton === 2 ? <SvgActiv/> : <Svg/>}Spring
                </button>
                <button className={style.seasonsBtm}  onClick={() => handleButtonClick(3)}>
                {activeButton === 3 ? <SvgActiv/> : <Svg/>}Summer
                </button>
                <button className={style.seasonsBtm}  onClick={() => handleButtonClick(4)}>
                {activeButton === 4 ? <SvgActiv/> : <Svg/>}Autumn
                </button>
            </div>
            <div className={style.favorite}>

                {photo.map((elem)=>{
                        const {id, src,alt,text,autor,name}=elem;
                            return(
                                 <div className={style.card}>
                                 <h3 className={style.cardTitle}> Staff Picks  </h3>
                                 <div>
                                    <p className={style.cardName}>{name}</p>
                                    <p className={style.cardAutor}>{autor}</p>
                                 </div>

                                 <p className={style.cardText}>{text}</p>
                                <img className={style.cardImg} src={src} alt={alt} key={id}/>
                                <Link to="/library/buycard"> <button className={style.cardBtn}>Buy</button></Link>
                                 </div>
                            )
                
                    }
                )
                }
            </div>

            </div>


        </section>
    )
}

export default Favorite;