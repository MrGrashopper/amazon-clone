import React from 'react';
import '../styles/CheckoutProduct.scss'; 
import { useStateValue } from "../StateProvider";

function CheckoutProduct({id, image, title, price, rating, index}) {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct" key={'checkoutProduct_' + index + id + title}>
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <div className="checkoutProduct__price">
                    <small>€</small>
                    <strong>{price}</strong>
                    <div className="checkoutProduct__rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => {
                                <p key={'checkoutProductStar_' + index + rating + i}>⭐️</p>
                            }
                        )}                        
                    </div>
                    <button onClick={removeFromBasket}>remove from basket</button>   
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
