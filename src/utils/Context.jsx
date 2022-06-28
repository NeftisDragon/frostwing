import {createContext, useState, useContext} from 'react';

export const CartContext = createContext();
const Provider = CartContext.Provider;

export const useCartContext = () => {
    return useContext(CartContext);
}

export const MyProvider = ({children}) => {  
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    }

    const addItem = (item) => {
        const copyCart = cart.slice();
        copyCart.push(item);
        setCart(copyCart);
    }

    const removeItem = (id) => {
        setCart(cart.filter(product => (product.id !== id)))
    }

    const addQty = (id) => {
        const index = cart.findIndex((item) => item.id === Number(id));
        const item = cart[index];
        if(item.quantity < item.stock) {
            const newQty = item.quantity + 1;
            const copyCart = cart.slice();
            copyCart[index].quantity = newQty;
            setCart(copyCart);
        }
    }

    const removeQty = (id) => {
        const index = cart.findIndex((item) => item.id === Number(id));
        const item = cart[index];
        if (item.quantity === 1) {
            removeItem(id);
        } else {
            const newQty = item.quantity - 1;
            const copyCart = cart.slice();
            copyCart[index].quantity = newQty;
            setCart(copyCart);
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotalQuantity = () => {
        return cart.reduce((acc, product) => acc += product.quantity, 0);
    }

    const getTotalPrice = () => {
        return cart.reduce((acc, product) => acc += (product.price * product.quantity), 0);
    }

    const contextValue = {
        cart: cart,
        isInCart: isInCart,
        addItem: addItem,
        removeItem: removeItem,
        addQty: addQty,
        removeQty: removeQty,
        clearCart: clearCart,
        getTotalQuantity: getTotalQuantity,
        getTotalPrice: getTotalPrice,
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}