import React, { useEffect, useState } from "react";
import style from './Slider.module.css';
import Arr from './SliderArr/SliderArr';

const Slider = ()=>{
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [activeButton, setActiveButton] = useState(1);
    const [photo, setPhoto] = useState(screenWidth>768 ? [Arr[0],Arr[1],Arr[2]]:[Arr[0]]);

    
    
    function handleResize() {  //функцию, которая будет обновлять ширину экрана при изменении размера окна
        setScreenWidth(window.innerWidth);
      }

     // используем хук useEffect, чтобы добавить обработчик события resize при монтировании компонента
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // возвращаем функцию, которая будет удалять обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



    
    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        if(buttonId===1){
            setPhoto([Arr[0],Arr[1],Arr[2]]);
        }
        else if(buttonId===2){
            setPhoto([Arr[1],Arr[2],Arr[3]]);
        }
        else{
            setPhoto([Arr[2],Arr[3],Arr[4]]);
        }
    };

    const handleButtonClick2 = (buttonId)=>{
        setActiveButton(buttonId);
        if(buttonId === 1){setPhoto([Arr[0]])}
        else if(buttonId === 2){setPhoto([Arr[1]])}
        else if(buttonId === 3){setPhoto([Arr[2]])}
        else if(buttonId === 4){setPhoto([Arr[3]])}
        else{setPhoto([Arr[4]])}
        

    }

        return(
        <div>
            <div className={style.slider}>
                {photo.map((el)=>{
                    return (<img src={el.src} alt={el.name} id={el.id}/>)
            })}
            </div>
            <div className={style.blockBtn}>
                    <button
                    key={1}
                    onClick={() => {screenWidth>768 ? handleButtonClick(1) : handleButtonClick2(1) }}
                    className={`${style.myButton} ${activeButton === 1 ? style.active : ''}`}
                > </button>
                            <button
                    key={2}
                    onClick={() => {screenWidth > 768 ? handleButtonClick(2) : handleButtonClick2(2)}}
                    className={`${style.myButton} ${activeButton === 2 ? style.active : ''}`}
                ></button>
                            <button
                    key={3}
                    onClick={() => {screenWidth>768 ? handleButtonClick(3) : handleButtonClick2(3) } }
                    className={`${style.myButton} ${activeButton === 3 ? style.active : ''}`}
                 ></button>
                                          <button
                    key={4}
                    onClick={() => {screenWidth>768 ? handleButtonClick(4) : handleButtonClick2(4
                    ) } }
                    className={`${style.myButton} ${activeButton === 4 ? style.active : ''}`}
                 ></button>
                                          <button
                    key={5}
                    onClick={() => {screenWidth>768 ? handleButtonClick(5) : handleButtonClick2(5) } }
                    className={`${style.myButton} ${activeButton === 5 ? style.active : ''}`}
                 ></button>
                    
            </div>
            
        </div>

        )}

export default Slider;