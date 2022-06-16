import '../App.css';
import {Link} from 'react-router-dom';

function Item({id, name, overview}) {
    return (
        <div className="item">
            <p className="item-name">{name}</p>
            <img src={overview} alt="product-overview" className="item-overview" />
            <Link className="item-button" to={`/detail/${id}`}>View More</Link>
        </div>
    )
}

export default Item;