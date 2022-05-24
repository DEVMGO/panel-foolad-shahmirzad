import Exit from '../../assets/icons/exit'
import User from '../../assets/img/user2.jpg'
import './navbar.css';

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <div className='user'>
                <div className='img-user'>
                    <img src={User} alt='user' />
                </div>
                <h5>متین بهرامی</h5>
            </div>
            <button className='btn'><Exit />خروج از حساب</button>
        </div>
     );
}
 
export default Navbar;