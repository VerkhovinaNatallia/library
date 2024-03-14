import { Link } from 'react-router-dom';
import style from './Profile.module.css';

const Profie = () => {
    return (
        <div className={style.profile}>
            <p>Profile</p>
            <div className={style.profileBefore}></div>
            <div className={style.profileBottom}>
                <Link to="/login"><button>Log In</button></Link>
                <Link to="/register"><button>Register</button></Link>
            </div>

        </div>
      );
}
 
export default Profie;