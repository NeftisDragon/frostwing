import '../styles/App.css';
import logo from '../assets/images/FrostWing_logo.png';
import CartWidget from './CartWidget';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    const MySwal = withReactContent(Swal);

    const soon = () => {
        MySwal.fire({
            title: <p>Coming soon!</p>
        })
    }

    return (
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
                            <li className="li-3" onClick={soon}>NVIDIA</li>
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