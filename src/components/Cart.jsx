import '../App.css';
import emptyCart from '../assets/vectors/empty.svg';
import remove from '../assets/vectors/remove.svg';
import { useCartContext } from '../utils/Context.jsx';
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, removeItem, clearCart, getSubtotal, getGrandTotal } = useCartContext();
    if (cart.length === 0) {
        return (
            <section className="cart-empty">
                <img src={emptyCart} />
                <h1>Come back once you've picked your CPU!</h1>
            </section>
        )
    }

    return (
        <section className="cart">
            <div className="table">
                <ul>
                    <li className="table-header">
                        <div className="col col-1">NAME</div>
                        <div className="col col-2">QUANTITY</div>
                        <div className="col col-3">PRICE</div>
                        <div className="col col-4"></div>
                    </li>
                </ul>
                {cart.map((item) => (
                    <ul>
                        <li key={item.id} className="table-row">
                            <div className="col col-1">{item.name}</div>
                            <div className="col col-2">{item.quantity}</div>
                            <div className="col col-3">${parseFloat(getSubtotal(item.price, item.quantity)).toFixed(2)}</div>
                            <div className="col col-4">
                                <button onClick={() => removeItem(item.id)} className="removeBTN">
                                    <img src={remove} />
                                </button>
                            </div>
                        </li>
                    </ul>
                ))}
                <ul>
                    <li className="table-header">
                        <div className="col col-1">TOTAL</div>
                        <div className="col col-2"></div>
                        <div className="col col-3"></div>
                        <div className="col col-4">${parseFloat(getGrandTotal()).toFixed(2)}</div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div className="clear-cart-btn">
                            <button onClick={clearCart}>Clear All</button>
                        </div>
                        <div className="checkout-btn">
                            <Link className="checkout" to="/checkout"><button>Checkout</button></Link>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Cart;