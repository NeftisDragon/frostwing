import '../App.css';
import ItemList from './ItemList.js';
import products from '../utils/products.js';
import {getProducts} from '../utils/products.js';
import {useEffect, useState} from 'react';

function customError() {
    throw Error("Failed to get resources.");
}

function ItemListContainer(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts(2000, products, customError)
        .then(r => {
            setItems(r);
        })
        .catch(error => {
            customError(error);
        })
    }, [items])

    return (
        <>
            <section className="customMessage">
                <h1>{props.greet}</h1>
            </section>
            <section className="ItemListContainer">
                {items?.length <= 0 ? <p>Loading...</p> : <ItemList products={items} />}
            </section>
        </>
    )
}

export default ItemListContainer;