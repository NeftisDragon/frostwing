import './NavBar.css';

const Item = (props) => {
    return (
        <section className="item-container">
            <h1>{props.greet}</h1>
        </section>
    )
}

export default Item;