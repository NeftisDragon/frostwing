import '../App.css';
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../utils/Context.jsx';

function ItemDetail({ item }) {
    const { addItem } = useContext(CartContext);
    const [confirm, setConfirm] = useState(true);
    const [counter, setCounter] = useState(0);

    const onAdd = () => {
        if (counter >= 1) {
            const itemToCart = {
                ...item,
                quantity: counter,
            }
            addItem(itemToCart);
            setConfirm(false);
        } else {
            return null;
        }
    }

    return (
        <section className="detail-container">
            <div className="overview-container">
                <p className="item-name">{item.name}</p>
                <img src={item.overview} alt="product-overview" className="detail-overview" />
            </div>
            <div className="description">
                <div className="description-container">
                    <p className="detail-description">{item.description}</p>
                    <p className="detail-price">${item.price}</p>
                </div>
                <div className="counter-container">
                    {
                        confirm ? <ItemCount stock={item.stock} counter={counter} setCounter={setCounter} onAdd={onAdd} /> : <div className="view-cart-container"><Link to={`/cart`} className="view-cart">Go to Cart</Link></div>
                    }
                </div>
            </div>
        </section>
    )
}

export default ItemDetail;