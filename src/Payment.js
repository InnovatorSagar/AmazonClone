import { CardElement ,useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'; 
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { db } from './firebase';
import moment from 'moment';

function Payment() {

    const history = useHistory();
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true); 
    const [{basket,user},dispatch] =  useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded , setSucceeded] = useState(false);
    const [processing, setProcessinng] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    
    useEffect(() => {
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url : `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
        console.log("GEtting client Seclret");
    }, [basket])

    console.log('Secret: ', clientSecret);

    const handleSubmit = async e => {
        e.preventDefault();
        setProcessinng(true);

        try {
            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }).then(({paymentIntent}) => {
                //Payment Intent equals Payment Confirmation
                console.log(paymentIntent);
                db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
    
                setSucceeded(true);
                setError(null);
                setProcessinng(false);
                dispatch({
                    type: 'EMPTY_BASKET'
                })
                history.replace('/orders');
            }).catch(e => {
                console.log(e);
            })
        } catch(e) {
            console.log(e)
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(Math.random().toString(36).substring(2,7))
            .set({
                basket: basket,
                amount: getBasketTotal(basket)*100,
                created: moment().unix(),
            })
            setSucceeded(true);
            setError(null);
            setProcessinng(false);
            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders');
        }
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivery</h3>
                    </div> 
                    <div className='payment__items'>
                        {basket.map(item => (
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
                <div className='payment__section'>
                    <div className='payment__title'>
                            <h3>Payment Method</h3>
                    </div> 
                    <div className='payment__details'>
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                                <div className='payment__priceContainer'>
                                <CurrencyFormat 
                                    renderText = {(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"???"} 
                                />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> :
                                        "Buy Now"}</span>
                                    </button>
                                </div>
                                {error && <div>{error}</div>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
