import ItemDetail from './ItemDetail.js';
import {getProduct} from '../utils/products';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    function customError() {
        throw Error("Failed to get resources.");
    }

    useEffect(() => {
        getProduct(2000, parseInt(id), customError)
        .then(r => {
            setProduct(r);
        })
        .catch(error => {
            customError(error);
        })
    },[])

    return (
        <ItemDetail {...product} />
    )
}

export default ItemDetailContainer;