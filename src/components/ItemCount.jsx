import '../styles/App.css';

function ItemCount({ stock, counter, setCounter, onAdd }) {

    const increaseCounter = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    const success = () => {
        onAdd(counter);
    }

    return (
        <section className="counter">
            <div className="q-selection">
                <button onClick={decreaseCounter} className="decrease-counter">&#8722;</button>
                <p>{counter}</p>
                <button onClick={increaseCounter} className="increase-counter">&#43;</button>
            </div>
            <div className="q-confirmation">
                {!counter ? <button disabled={true} className="disabled">CONFIRM</button> : <button onClick={success} disabled={false}>CONFIRM</button>}
            </div>
        </section>
    )
}

export default ItemCount;