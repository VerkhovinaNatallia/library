import { Link } from 'react-router-dom';
import style from './register.module.css'

const Register = () => {
    return (  
        <div className={style.wrapper}>
            <form className={style.registr}>
                <Link to="/library/" className={style.exet}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"
                    fill="none">
                    <path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" stroke-width="3" />
                    <path d="M2 2.14926L17 17" stroke="#0C0C0E" stroke-width="3" />
                </svg>
            </Link>   
            <h3 className={style.title}>Register</h3>
            <div className={style.inputConteiner}>
                <label> First name </label>
                <input  type="text" name="firstname" maxlength="20"/>
                <label > Last name </label>
                <input  type="text" name="lastname" maxlength="20"/>                <span class="error"></span>
                <label > E-mail </label>
                <input type="email" name="email"/>                <span class="error"></span>
                <label >Password</label>
                <input type="password" name="password" minlength="8"/>
                <button className={style.button} type="button">Sign Up</button>

            </div>
            <div className={style.question}>
                <span>Already have an account?</span>
                <Link to="/library/login" className={style.questionReg}>Login</Link>
            </div>
    


            </form>

       </div>
    );
}
 
export default Register;