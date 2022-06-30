import '../App.css';
import ItemDetail from './ItemDetail.jsx';
import logo from '../logo.svg';
import { getProduct } from '../utils/products.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    function customError() {
        throw Error("Failed to get resources.");
    }

    useEffect(() => {
        setLoading(true);

        getProduct(1500, id, customError)
            .then(r => {
                setProduct(r);
                setLoading(false);
            })
            .catch(error => {
                customError(error);
            })
    }, [])

    return (
        <>
            {loading ? <div className="loading-screen"><img src={logo} className="logo" alt="logo" /><p>Loading...</p></div> : <ItemDetail item={product} />}
        </>
    )
}

export default ItemDetailContainer;