import './components.css';
import ItemList from './ItemList.js';
import customFetch from '../utils/customFetch';
import products from '../utils/products.js';
import {useEffect, useState} from 'react';

function ItemListContainer(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
        .then(r => setItems(r))
    }, [items])

    return (
        <>
            <section className="customMessage">
                <h1>{props.greet}</h1>
            </section>
            <section className="ItemListContainer">
                <ItemList products={items} />
            </section>
        </>
    )
}

export default ItemListContainer;