import React,{useState,useEffect} from "react";
import ImageHelper from "./helper/ImageHelper";
import addItemToCart, { removeItemFromCart } from "./helper/cartHelper"
import { Redirect } from "react-router-dom";
import './Card.css'

    // function(f){return f}
    const Card = ({product,addtoCart = true,removeFromCart = false,setReload = f => f,reload = undefined}) => {

      const [redirect,setRedirect] = useState(false);
      const [count,setCount] = useState(product.count)

      const cartTitle = product ? product.name:"A photo from pexels"
      const cartDescription = product ? product.description: "Default description"
      const cartPrice = product ? product.price: "Default"

      const addToCart = () => {
        addItemToCart(product, () => setRedirect(true))
      }

      const getARedirect = (redirect) => {
        if(redirect){
          return <Redirect to="/cart" />
        }
      }


      const showAddToCart = (addtoCart) => {
        return (
          addtoCart && (
            <button
            onClick={addToCart}
            className="btn btn-block btn-outline-success mt-2 mb-2"
            >
              Add to cart
            </button>
          )
        )
      }

      const showRemoveFromCart = (removeFromCart) => {
        return ( removeFromCart && (
          <button
              onClick={() => {
                removeItemFromCart(product._id)
                setReload(!reload)
              }}
              className="btn btn-block btn-outline-danger mt-2 mb-2"
                  >
              Remove from cart
              </button>
          ) 
        )
      }
        return (
          <div className="card  text-white">
            <div className="text-dark">{cartTitle}
            <div className="">
              {getARedirect(redirect)}
             <ImageHelper className="" product={product}/>
              <p className="lead font-weight-normal text-wrap text-dark">
                {cartDescription}
              </p>
              <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
              <div className="row">
                <div className="col-12">
                 {showAddToCart(addtoCart)}
                </div>
                <div className="col-12">
                  {showRemoveFromCart(removeFromCart)}
                </div>
              </div>
            </div>
          </div>
          </div>
        );
      };

export default Card;