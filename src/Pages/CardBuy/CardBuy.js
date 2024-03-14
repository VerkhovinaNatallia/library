import { Link } from 'react-router-dom';
import style from './cardBuy.module.css'


const CardBuy = () => {
    return ( 
        <div className={style.cardBuy}>
            <Link to="/library/" className={style.exet}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"
                            fill="none">
                            <path d="M2 16.8507L17 2.00003" stroke="#fff" stroke-width="3" />
                            <path d="M2 2.14926L17 17" stroke="#fff" stroke-width="3" />
                        </svg>
            </Link>  
            <div className={style.topBlock}>
                        <h3>Buy a library card</h3>
            </div>
            <div className={style.block}>
                <form className={style.inputConteiner}>
                
                <label >Bank card number </label>
                <input type="number" min="12" max="12"/>
                <label>Expiration code</label>
                <div className={style.blockInput22}>
                <input className={style.input22} type="password" name="password" title="Min length is 8 symbols" minlength="8"/>
                <input className={style.input22} type="password" name="password" title="Min length is 8 symbols" minlength="8"/>
                </div>
                <label > CVC </label>
                <input className={style.input22}  type="text" name="email"/>
                <label > Cardholder name </label>
                <input type="text" name="email"/>
                <label > Postal code </label>
                <input type="text" name="email"/>
                <label > City / Town </label>
                <input type="text" name="email"/>
                <div className={style.prices}>
                <button className={style.button} type="button" >Buy</button>
                <p>$ 25.00</p>
                </div>

                </form>
                <p className={style.text}>If you are live, work, attend school, or pay property taxes in New York State, you can get a $25 digital library card right now using this online form. Visitors to New York State can also use this form to apply for a temporary card.
                </p>
            </div>
        
        </div>
     );
}
 
export default CardBuy;