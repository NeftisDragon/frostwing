import '../App.css';
import ItemCount from './ItemCount';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function ItemDetail({name, overview, description, price, stock}) {
    const [confirm, setConfirm] = useState(true);

    const onAdd = (quantity) => {
        if (quantity >= 1) {
            console.log("Product added!");
            setConfirm(false);
        } else {
            return null;
        }
    }

    return (
        <section className="detail-container">
                <div className="overview-container">
                    <p className="item-name">{name}</p>
                    <img src={overview} alt="product-overview" className="detail-overview" />
                </div>
                <div className="description">
                    <div className="description-container">
                        <p className="detail-description">{description}</p>
                        <p className="detail-price">${price}</p>
                    </div>
                    <div className="counter-container">
                        {confirm ? <ItemCount stock={stock} initial={0} onAdd={onAdd} /> : <div className="view-cart-container"><Link to={`/cart`} className="view-cart">Go to Cart</Link></div>}
                    </div>
                </div>
        </section>
    )
}

export default ItemDetail;