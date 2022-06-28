import { useCartContext } from '../utils/Context.jsx';

function Cart() {
    const { cart, removeItem, clearCart } = useCartContext();
    if (cart.length === 0) {
        return (
            <h1>Nothing here!</h1>
        )
    }

    return (
        <section>
            <div>
                {cart.map((item) => (
                    <div key={item.id}>
                        <div>
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <p>{item.quantity}</p>
                        </div>
                        <div>
                            <p>${item.price}</p>
                        </div>
                        <div>
                            <button onClick={() => removeItem(item.id)} >X</button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={clearCart}>Clear All</button>
            </div>
        </section>
    )
}

export default Cart;