import '../App.css';
import logo from '../logo.svg';
import ItemList from './ItemList.jsx';
import ScrollUp from './ScrollUp.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productCollection } from '../utils/firestore.js';
import { getDocs, query, where } from 'firebase/firestore';

function customError() {
    throw Error("Failed to get resources.");
}

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        setLoading(true);
        const ref = category ? query(productCollection, where('category', '==', category)) : productCollection;

        getDocs(ref)
            .then(r => {
                const products_map = r.docs.map(doc => {
                    const aux = doc.data();
                    aux.id = doc.id;
                    return aux;
                })

                setItems(products_map);
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