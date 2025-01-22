import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import PaymentFrom from "./PaymentFrom";
const stripeKey = loadStripe(import.meta.env.VITE_PANEMT_PUBLIC_KEY);

const PayNow = () => {
    const { id } = useParams();

    return (
        <div>
            <h1 className="lg:text-3xl font-semibold text-xl">Payment</h1>
            <div className="mt-10">
                <Elements stripe={stripeKey}>
                    <PaymentFrom id={id}></PaymentFrom>
                </Elements>
            </div>
        </div>
    );
};

export default PayNow;