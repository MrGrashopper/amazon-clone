import React from 'react';
import '../styles/Checkout.scss'; 
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {

    const [{ basket, user }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/03/credit/img20/BAU/bau_40_2020_maple_p_770x80._CB659302171_.jpg" alt=""/>
                <div>
                    <h3>Hello, {user?.email }</h3>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basket.map((item, i) => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            index= {i}
                            key={"checkoutProduct_" + i + item.id + item.title}/>
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>

        </div>
    )
}

export default Checkout
