import React from 'react';

const checkoutForm = (props) => {
    return (
        <div className="order-form">
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="userName" value={props.value} onChange={props.handleChange} placeholder="Your name.." />
                <input type="email" name="userEmail" value={props.value} onChange={props.handleChange} placeholder="Your email.." />
                <input type="text" name="userAdress" value={props.value} onChange={props.handleChange} placeholder="Your adress.." />
                <input type="submit" name="submit" value="Submit" />
            </form>
        </div>
    );
}

export default checkoutForm;

