import ItemCount from "./ItemCount";

function ItemDetail({description, price, stock}) {
    return (
        <>
            <p>{description}</p>
            <p>${price}</p>
            <ItemCount stock={stock} initial={0} onAdd={() => {}} />
        </>
    )
}

export default ItemDetail;