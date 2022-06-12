import './components.css';
import Cart from '../assets/vectors/cart.svg';

function CartWidget() {
    return (
        <div className="cart-container">
            <img className="cart-vector" src={Cart} />
        </div>
    )
}

export default CartWidget;