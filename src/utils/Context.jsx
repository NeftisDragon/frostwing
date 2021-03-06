import { createContext, useState, useContext } from 'react';

export const CartContext = createContext();
const Provider = CartContext.Provider;

export const useCartContext = () => {
    return useContext(CartContext);
}

export const MyProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const addItem = (item) => {
        if (isInCart(item.id)) {
            const index = cart.findIndex((index) => (index.id === item.id));
            const copyCart = [...cart];
            copyCart[index].quantity += item.quantity;
            setCart(copyCart);
        } else {
            const itemToAdd = { ...item };
            setCart([...cart, itemToAdd]);
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => (item.id !== id)))
    }

    const clearCart = () => {
        setCart([]);
    }

    const getSubtotal = (price, quantity) => {
        let subtotal = 0;
        subtotal += price * quantity;
        return Number(subtotal);
    }

    const getGrandTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        })
        return Number(total);
    }

    const getLength = () => {
        let length = 0;
        cart.forEach((item) => {
            length = length + item.quantity;
        })
        return length;
    }

    const contextValue = {
        cart: cart,
        isInCart,
        addItem,
        removeItem,
        clearCart,
        getSubtotal,
        getGrandTotal,
        getLength,
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}