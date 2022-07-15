import '../styles/App.css';
import { Link } from 'react-router-dom';

function Item({ id, name, overview, category }) {
    if (category === 'Intel') {
        return (
            <div className="item shadow-intel">
                <p className="item-name">{name}</p>
                <img src={overview} alt="product-overview" className="item-overview" />
                <hr />
                <div className="item-button-container">
                    <Link className="item-button" to={`/detail/${id}`}>VIEW MORE</Link>
                </div>
            </div>
        )
    } else if (category === 'AMD') {
        return (
            <div className="item shadow-amd">
                <p className="item-name">{name}</p>
                <img src={overview} alt="product-overview" className="item-overview" />
                <hr />
                <div className="item-button-container">
                    <Link className="item-button" to={`/detail/${id}`}>VIEW MORE</Link>
                </div>
            </div>
        )
    }
}

export default Item;