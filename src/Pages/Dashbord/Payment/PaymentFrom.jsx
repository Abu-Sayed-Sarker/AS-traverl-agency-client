import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const PaymentFrom = ({ id }) => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useSecureAxios();
    const { user } = useAuth();
    const navigate = useNavigate();



    const { data: booking = {} } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking-price/${id}`)
            return res.data
        }
    })
    const totalPrice = parseInt(booking.price);
    console.log(totalPrice)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                }

                const res = await axiosSecure.post('/payments', payment);

                console.log('payment saved', res.data);



                const data = { status: "In-review" }
                axiosSecure.put(`/status/${id}`, data)
                    .then(res => {
                        console.log(res.data);

                    })



                if (res.data?.paymentResult?.insertedId) {

                    navigate('/dashboard/mybooking')
                }

            }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="">
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
                <button className="btn bg-secondary/50 hover:bg-secondary mt-3" type="submit" >
                    Pay
                </button>
            </div>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default PaymentFrom;