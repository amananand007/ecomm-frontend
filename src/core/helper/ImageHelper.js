import React from "react";
import { API } from "../../backend";


const ImageHelper = ({product}) => {

     const   imageurl = product ? `${API}/product/photo/${product._id}` : `https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600`
    return (
        <div className="rounded p-2">
        <img
          src={imageurl}
          alt="photo"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          className="mb-3 rounded"
        />
      </div>
    )
}

export default ImageHelper;