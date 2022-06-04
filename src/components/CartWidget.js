import Cart from '../assets/vectors/cart.svg';
import './NavBar.css';

function CartWidget() {
    return (
        <div className="cart-container">
            <img className="cart-vector" src={Cart} />
        </div>
    )
}

export default CartWidget;