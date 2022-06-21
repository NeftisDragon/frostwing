import '../App.css';
import logo from '../logo.svg';
import ItemList from './ItemList.js';
import ScrollUp from './ScrollUp.jsx';
import {getProducts} from '../utils/products.js';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function customError() {
    throw Error("Failed to get resources.");
}

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams();

    useEffect(() => {
        setLoading(true);

        getProducts(2000, category, customError)
        .then(r => {
            setItems(r);
            setLoading(false);
        })
        .catch(error => {
            customError(error);
        })
    }, [category])

    return (
        <>
            <section id="top" className="customMessage">
                <h1>Find your CPU</h1>
            </section>
            <section className="ItemListContainer">
                {loading ? <div className="loading-screen"><img src={logo} className="logo" alt="logo" /><p>Loading...</p></div> : <ItemList products={items} />}
                <ScrollUp />
            </section>
        </>
    )
}

export default ItemListContainer;