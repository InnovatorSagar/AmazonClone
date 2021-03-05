import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{basket, user},dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt=""/>

                <div>
                    <h3>{user?.email}</h3>
                    <h2 className="checkout__title">
                         Your shoppig Basket
                    </h2>
                    {basket.map((item) => (
                        <CheckoutProduct 
                         id={item.id}
                         title={item.title}
                         price={item.price}
                         rating={item.rating}
                         image={item.image}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
