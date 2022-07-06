import '../App.css';
import emptyCart from '../assets/vectors/empty.svg';
import remove from '../assets/vectors/remove.svg';
import Form from './Form.jsx';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useCartContext } from '../utils/Context.jsx';
import { useState } from 'react';
import { db } from '../utils/firestore.js';
import { serverTimestamp, collection, addDoc } from 'firebase/firestore';

function Cart() {
    const [data, setData] = useState({ name: "", email: "", phone: "" });
    const [form, setForm] = useState(false);
    const { cart, removeItem, clearCart, getSubtotal, getGrandTotal } = useCartContext();
    const MySwal = withReactContent(Swal);

    function customError() {
        throw Error("Failed to submit the order.");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(
            { ...data, [name]: value }
        );
    }

    const handleSubmit = (e) => {
        MySwal.fire({
            title: <p>Processing Order</p>,
            didOpen: () => {
                MySwal.showLoading()
            },
        })
        const order = cart.map((item) => {
            return {
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: getSubtotal(item.price, item.quantity)
            }
        });
        e.preventDefault();
        const objOrder = {
            buyer: {
                name: data.name,
                email: data.email,
                phone: data.phone,
            },
            order,
            total: getGrandTotal(),
            date: serverTimestamp(),
        };

        const ref = collection(db, 'orders');
        addDoc(ref, objOrder)
            .then(r => {
                const orderID = r.id;
                clearCart();
                MySwal.hideLoading();
                MySwal.fire({
                    title: <p>Operation successful! Your order number is: {orderID}</p>
                })
            })
            .catch(error => {
                customError(error);
            })
    }

    const setFormToggle = () => {
        setForm(true);
    }

    const setFormToggleOff = () => {
        setForm(false);
    }

    if (cart.length === 0) {
        return (
            <section className="cart-empty">
                <img src={emptyCart} />
                <h1>Come back once you've picked your CPU!</h1>
            </section>
        )
    }

    if (form === true) {
        return (
            <section className="formulary">
                <button onClick={setFormToggleOff} className="return-btn">Return</button>
                <Form
                    handleChange={handleChange}
                    data={data}
                    handleSubmit={handleSubmit}
                />
            </section>
        )
    } else {
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
                            <div className="continue-btn">
                                <button onClick={setFormToggle}>Continue</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Cart;