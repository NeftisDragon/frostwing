import './NavBar.css';
import Logo from '../assets/images/logo-placeholder-image.png';
import CartWidget from './CartWidget';

function NavBar() {
    return(
        <header>
            <div className="header-container">
                <div className="logo">
                    <a href="#"><img src={Logo} /></a>
                </div>
                <div className="navigation">
                    <nav>
                        <ul>
                            <a href="#"><li>HOME</li></a>
                            <a href="#"><li>PRODUCTS</li></a>
                            <a href="#"><li>ABOUT</li></a>
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