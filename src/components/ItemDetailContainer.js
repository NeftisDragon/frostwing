import ItemDetail from './ItemDetail.js';
import {getProduct} from '../utils/products';
import {useEffect, useState} from 'react';

function ItemDetailContainer() {
    const [product, setProduct] = useState({});

    function customError() {
        throw Error("Failed to get resources.");
    }

    useEffect(() => {
        getProduct(2000, product, customError)
        .then((res) => {
            setProduct(res);
        })
        .catch((error) => {
            customError(error);
        })
    })

    return (
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer;