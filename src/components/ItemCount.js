import {useState} from 'react';

function ItemCount({stock, initial, onAdd}) {
    const [counter, setCounter] = useState(initial);
    const [newStock, setNewStock] = useState(stock);

    const increaseCounter = () => {
        setCounter(counter + 1);
        setNewStock(newStock - 1);
    }

    const decreaseCounter = () => {
        if (counter > initial){
            setCounter(counter -1);
            setNewStock(newStock + 1);
        }
    }

    const success = () => {
        if (newStock > 0 && counter >= 1) {
            alert("Product added!");
        } else if (newStock > 0 && counter < 1) {
            return null;
        } else {
            alert("No stock available!");
        }
    }

    return (
        <section>
            <p>{counter}</p>
            <button onClick={decreaseCounter}>-</button>
            <button onClick={increaseCounter}>+</button>
            <button onClick={success}>Confirm</button>
        </section>
    )
}

export default ItemCount;