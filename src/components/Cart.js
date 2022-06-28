import { useCartContext } from '../utils/Context.jsx';

function Cart() {
    const { cart } = useCartContext();
    if (cart.length === 0) {
        return (
            <></>
        )
    }

    return (
        <></>
    )
}

export default Cart;