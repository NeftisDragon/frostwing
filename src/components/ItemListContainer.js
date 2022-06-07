import './NavBar.css';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    return (
        <>
            <section className="item-container">
                <h1>{props.greet}</h1>
            </section>
            <ItemCount stock={5} initial={0} onAdd={() => {}} />
        </>
    )
}

export default ItemListContainer;