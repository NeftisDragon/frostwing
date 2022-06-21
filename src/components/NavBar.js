import '../App.css';
import logo from '../assets/images/FrostWing_logo(1).png';
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';

function NavBar() {
    return(
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <Link to="/"><img src={logo} className="mainLogo" alt="logo" /></Link>
                </div>
                <div className="navigation">
                    <nav>
                        <ul>
                            <NavLink to="/category/Intel"><li className="li-1">INTEL</li></NavLink>
                            <NavLink to="/category/AMD"><li className="li-2">AMD</li></NavLink>
                            <NavLink to="/about"><li className="li-3">ABOUT</li></NavLink>
                        </ul>
                    </nav>
                </div>
                <div className="vectors">
                    <CartWidget />
                </div>
            </div>
        </header>
    )
}

export default NavBar;