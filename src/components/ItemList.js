import Item from './Item.js';

function ItemList({products}) {
    return (
        products.map(p =>
            <Item
            id={p.id}
            name={p.name}
            overview={p.overview}
            stock={p.stock}
            key={p.id}
            />
            )
    )
}

export default ItemList;