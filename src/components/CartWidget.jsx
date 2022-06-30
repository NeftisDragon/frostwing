import '../App.css';
import Cart from '../assets/vectors/cart.svg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../utils/Context.jsx';

function CartWidget() {
    const r = useContext(CartContext);

    return (
        <NavLink to="/cart">
            <div className="cart-container">
                <img className="cart-vector" src={Cart} />
                <div className="cart-q-container">
                    <p>{r.getTotalQuantity}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default CartWidget;