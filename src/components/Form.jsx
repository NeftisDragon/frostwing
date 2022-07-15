import '../styles/App.css';
import { useEffect } from 'react';

function Form({ handleChange, data, handleSubmit }) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name*</label>
            <input placeholder="Your Name" type="text" name="name" id="name" onChange={handleChange} value={data.name} required />
            <label htmlFor="email">Email Address*</label>
            <input placeholder="example@domain.com" name="email" id="email" type="email" onChange={handleChange} value={data.email} required />
            <label htmlFor="phone">Phone Number</label>
            <input placeholder="Eg. *1 800 000000" name="phone" id="phone" type="text" onChange={handleChange} value={data.phone} />
            <button className="checkout-btn">Checkout</button>
        </form>
    )
}

export default Form;