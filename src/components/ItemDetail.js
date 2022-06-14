function ItemDetail({product}) {
    return (
        <>
            <img src={product.overview} alt="product-overview" className="item-overview" width="300px" />
            <p>{product.description}</p>
            <p>{product.price}</p>
        </>
    )
}

export default ItemDetail;