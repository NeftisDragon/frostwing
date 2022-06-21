import '../App.css';
import ItemCount from './ItemCount';

function ItemDetail({name, overview, description, price, stock}) {
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
                        <ItemCount stock={stock} initial={0} onAdd={() => {}} />
                    </div>
                </div>
        </section>
    )
}

export default ItemDetail;