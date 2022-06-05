import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../../firebase.init';

const CheckoutForm = ({ order, refetch, processing }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    // Check payment receiver
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('https://polar-cove-29814.herokuapp.com/create-payment-intent', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order),
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }
                return res.json()
            })
            .then((data) => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [order, navigate]);


    // Handle card submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            swal(`${error.message}`, {
                icon: "error"
            });
        }
        else {
            processing(true);
            // Complete payment process
            const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: order.customerName,
                        email: order.customerEmail
                    },
                },
            });

            if (paymentError) {
                processing(false);
                swal(`${paymentError.message}`, {
                    icon: "error"
                });
            }
            else {
                const id = order._id;
                const newStatus = 'Processing';
                const newPaymentStatus = 'Paid';
                const transactionID = paymentIntent.id;

                const orderToUpdate = { newStatus, newPaymentStatus, transactionID };

                // update order status and add transactionID
                fetch(`https://polar-cove-29814.herokuapp.com/payment/order/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(orderToUpdate),
                })
                    .then(res => {
                        if (res.status === 401 || res.status === 403) {
                            signOut(auth);
                            localStorage.removeItem('accessToken');
                            navigate('/')
                        }
                        return res.json()
                    })
                    .then((data) => {
                        processing(false);
                        if (data.acknowledged === true) {
                            swal(`Payment Successful.
                        Transaction ID: ${transactionID}`, {
                                icon: "success"
                            });
                            refetch();
                            navigate('/dashboard/my-orders');
                        }
                        else {
                            swal('Something is wrong', {
                                icon: "error"
                            });
                        }
                    });
            }
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe || !clientSecret} className='bg-primary hover:bg-secondary text-white rounded uppercase py-1 px-4 mt-8'>
                Pay Now
            </button>
        </form>
    );
};

export default CheckoutForm;