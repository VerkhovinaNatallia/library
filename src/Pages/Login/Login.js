import { Link } from 'react-router-dom';
import style from './login.module.css'


const Login = () => {
    return (
        <div className={style.wrapper}>
    <form className={style.login}>
        <Link to="/library/login" className={style.exet}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"
                fill="none">
                <path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" stroke-width="3" />
                <path d="M2 2.14926L17 17" stroke="#0C0C0E" stroke-width="3" />
            </svg>
        </Link>    
    
            <h3>Login</h3>
            <div className={style.inputConteiner}>
                <label > E-mail or readers card </label>
                <input type="text" name="email"/>
                <label>Password</label>
                <input type="password" name="password" title="Min length is 8 symbols" minlength="8"/>
                <button className={style.button} type="button" >Log In</button>
            </div>

            
            <div className={style.question}>
                <span>Don’t have an account?</span>
                <Link to="/library/register" className={style.questionReg}>Register</Link>
                
            </div>
      
    </form>
        </div>

      );
}
 
export default Login;