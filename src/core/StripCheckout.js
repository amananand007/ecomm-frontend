import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import StripeCheckoutButton from "react-stripe-checkout";
import { API } from "../backend";
import { createOrder } from "./helper/orderHelper";



const StripeCheckout = ({
    products,
    setReload = f => f,
    reload = undefined
}) => {

const [data,setData] = useState({
    loading:false,
    success:false,
    error:"",
    address:""
});

const token = isAuthenticated() && isAuthenticated().token
const userId = isAuthenticated() && isAuthenticated().user._id

const getFinalAmount = () => {
    let amount = 0;
    products.map(p => {
        amount = amount + p.price;
    });
    return amount;
}


const makePayment = (token) => {
    const body = {
        token,
        products
    }
    const headers = {
        "Content-Type":"application/json"
    }
    return fetch(`${API}/stripepayment`,{
        method:"POST",
        headers,
        body:JSON.stringify(body)
    }).then(response => {
        console.log(response)
        // call further methods
        const { status } = response;
        console.log("STATUS",status)
        
    })
    .catch(error => console.log(error))
}

const showStripeButton = () => {
    return isAuthenticated() ? (
        <StripeCheckoutButton
        stripeKey="pk_test_51MnQxmSGbjTtz4Az3mNhXL8IxADKvBUr6jcqQbgF6QGNzgSXYsiTdEdvM9aW5gbNmkXuPI8ZgVTHXFDVOpG5dBBR0084Lfgmex"
        token={makePayment}
        amount= {getFinalAmount() * 100}
        name="Buy Tshirt"
        shippingAddress
        billingAddress
        >
            <button className="btn btn-success">Pay with stripe</button>
        </StripeCheckoutButton>
    ) : (
        <Link to="/signin">
            <button className="btn btn-warning">Signin</button>
        </Link>
    )
}

    return (
        <div>
            <h3 className="text-dark">
                Stripe checkout $ {getFinalAmount()}
                {showStripeButton()}
            </h3>
        </div>
    )
}

export default StripeCheckout;