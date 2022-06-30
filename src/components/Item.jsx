import '../App.css';
import { Link } from 'react-router-dom';

function Item({ id, name, overview }) {
    return (
        <div className="item">
            <p className="item-name">{name}</p>
            <img src={overview} alt="product-overview" className="item-overview" />
            <hr />
            <div className="item-button-container">
                <Link className="item-button" to={`/detail/${id}`}>VIEW MORE</Link>
            </div>
        </div>
    )
}

export default Item;