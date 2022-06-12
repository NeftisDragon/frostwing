import './components.css';
import ItemCount from "./ItemCount";

function Item({name, overview, stock}) {
    return (
        <div className="item">
            <p className="item-name">{name}</p>
            <img src={overview} alt="product-overview" className="item-overview" />
            <ItemCount stock={stock} initial={0} onAdd={() => {}} />
        </div>
    )
}

export default Item;