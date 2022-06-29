import {createContext, useState, useContext} from 'react';

export const CartContext = createContext();
const Provider = CartContext.Provider;

export const useCartContext = () => {
    return useContext(CartContext);
}

export const MyProvider = ({children}) => {  
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
            const itemToAdd = {...item};
            setCart([...cart, itemToAdd]);
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => (item.id !== id)))
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotalQuantity = () => {
        let quantity = 0;
        cart.forEach((item) => {
            quantity = quantity + item.quantity;
        })
    }

    const getTotalPrice = () => {
        let price = 0;
        cart.forEach((item) => {
            price = price + (item.price * item.quantity);
        })
    }

    const contextValue = {
        cart: cart,
        isInCart: isInCart,
        addItem: addItem,
        removeItem: removeItem,
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