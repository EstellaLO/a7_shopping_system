import React from 'react'
import './CSS/Cart.css'
import { Link } from 'react-router-dom'
// require import from database, or database already imported from upper component (need to create new file) and passed as state/parameter

// passed state/parameter below named as "cart_items"
// need further amendments and connections between modules

/*
// below may be used for upper component
// /a7_shopping_system/frontend/src/Context/CartContext.jsx
-----------------------------------------------------------------------------
// import from database: refered as "carts"
// import { Cart } from '../Pages/Cart.jsx'
// blahblahblah...
// then also: 
const cartContext = createContext();
const cartContextProvider = () => {
    <cartContext.Provider value = {carts}>
        <passCarts />
    </cartContext.Provider>;
};

const passCarts = () => {
    const carts = useContext(cartContext);
    return (
        <>
            <Cart />
        </>
    )
};
*/

// so from the above, "carts" below refer to passed context
const Cart = () => {
    
    const proceedToCheckout = () => {
        <link to = {'./Checkout'}></link>
    };

    const confirmUser = () => {};
    
    const itemSubtotal = () => {};
    
    const filterCartItems = (item) => {
        if (item.userID == )
    };
    const renderCart = () => {
        carts.forEach(filterCartItems);
    };
    
    const updateSummary = (props) => {};

    return (
        <div className = 'cart'>
            <div className = 'cart_product' onLoad = {renderCart}>
                <table>
                    <tr>
                        <input type = 'checkbox' id = 'checkbox' name = 'checkbox' onClick = {updateSummary}></input>
                        <td id = 'iamge'>{}</td>
                        <td id = 'description'></td>
                        <td id = 'item_subtotal'>{item_subtotal}</td>
                    </tr>
                </table>
            </div>
            <div className = 'summary_subtotal'>
                <div id = 'summary'>
                    <div id = 'summary_head'><b>Summary</b></div>
                    <table>
                        <tr>
                            <td>Quantity</td>
                            <td>{total_quantity} Item(s)</td>
                        </tr>
                        <tr>
                            <td><b>Subtotal</b></td>
                            <td><b>HKD {summary_subtotal}</b></td>
                        </tr>
                    </table>
                </div>
                <div id = 'proceed_checkout'>
                    <button type = 'button' onClick = {proceedToCheckout}>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
