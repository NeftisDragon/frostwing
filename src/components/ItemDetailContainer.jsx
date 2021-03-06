import '../styles/App.css';
import ItemDetail from './ItemDetail.jsx';
import logo from '../assets/vectors/logo.svg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productCollection } from '../utils/firestore.js';
import { doc, getDoc } from 'firebase/firestore';

function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    function customError() {
        throw Error("Failed to get resources.");
    }

    useEffect(() => {
        setLoading(true);
        window.scrollTo(0, 0);
        const docRef = doc(productCollection, id);
        const query = getDoc(docRef);

        query
            .then(r => {
                setProduct(r.data());
                setLoading(false);
            })
            .catch(error => {
                customError(error);
            })
    }, [])

    return (
        <section>
            {loading ? <div className="loading-screen"><img src={logo} className="logo" alt="logo" /><p>Loading...</p></div> : <ItemDetail item={product} />}
        </section>
    )
}

export default ItemDetailContainer;