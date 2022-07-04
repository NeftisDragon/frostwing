import '../App.css';
import Cart from '../assets/vectors/cart.svg';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../utils/Context.jsx';

function CartWidget() {
    const { getLength } = useCartContext();

    return (
        <NavLink to="/cart" className="cart-widget">
            <div className="cart-container">
                <img className="cart-vector" src={Cart} />
            </div>
            <div className="total-items">
                <p>{getLength()}</p>
            </div>
        </NavLink>
    )
}

export default CartWidget;