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
            <section>
                <p className="disclaimer">Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.</p>
            </section>
        </>
    )
}

export default ItemListContainer;