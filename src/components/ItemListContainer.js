import '../App.css';
import logo from '../logo.svg';
import ItemList from './ItemList.js';
import ScrollUp from './ScrollUp.jsx';
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
            <section id="top" className="customMessage">
                <h1>{props.title}</h1>
            </section>
            <section className="ItemListContainer">
                {items?.length <= 0 ? <div className="loading-screen"><img src={logo} className="logo" alt="logo" /><p>Loading...</p></div> : <ItemList products={items} />}
                <ScrollUp />
            </section>
            <section>
                <p className="disclaimer">Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.</p>
            </section>
        </>
    )
}

export default ItemListContainer;