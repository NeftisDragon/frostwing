import './NavBar.css';
import Logo from '../assets/images/logo-placeholder-image.png';

function NavBar() {
    return(
        <header>
            <div class="header-container">
                <div class="logo">
                    <a href="#"><img src={Logo} /></a>
                </div>
                <div class="navigation">
                    <nav>
                        <ul>
                            <a href="#"><li>HOME</li></a>
                            <a href="#"><li>PRODUCTS</li></a>
                            <a href="#"><li>ABOUT</li></a>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavBar;