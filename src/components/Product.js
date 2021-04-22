import React from 'react';
import '../styles/Product.scss';
import { useStateValue } from "../StateProvider";

function Product({id, title, image, price, rating}) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className="product">
            <div className="poduct__info">
                <p>{title}</p>        
                <p className="product__price">
                    <strong>{price}</strong>
                    <small>€</small>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => {
                            return(
                                <p key={"checkout_" + title + rating + i}>⭐️</p>
                            )
                        }
                    )}
                </div>             
            </div>

            <img src={image} alt=""/> 

            <button onClick={addToBasket}>Add to basket</button>   
        </div>
    )
}

export default Product
