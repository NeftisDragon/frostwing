import '../App.css';
import logo from '../logo.svg';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
                </div>
                <div className="navigation">
                    <nav>
                        <ul>
                            <li>INTEL</li>
                            <li>AMD</li>
                            <li>ABOUT</li>
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