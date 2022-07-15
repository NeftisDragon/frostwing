import Item from './Item.jsx';

function ItemList({ products }) {
    return (
        products.map(p =>
            <Item
                id={p.id}
                name={p.name}
                overview={p.overview}
                price={p.price}
                stock={p.stock}
                category={p.category}
                key={p.id}
            />
        )
    )
}

export default ItemList;