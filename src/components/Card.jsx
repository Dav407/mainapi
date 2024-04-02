import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import './Card.css'

const Card = ({img, name, price, des}) => {
  return (
    <div className='card'>
        <img src={img} />
        {/* <img src="/Assets/logo.jpg" alt="" className="product-img" /> */}
        <h3>{name}</h3>
        <h3>${price}</h3>
        <p>{des}</p>
        <button>Add to cart <CiShoppingCart /></button>
    </div>
    // <div className='card'>
    //     <img src="data:image/jpeg;base64,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" alt="" className="product-img" />
    //     {/* <img src="/Assets/logo.jpg" alt="" className="product-img" /> */}
    //     <h3>Product-name</h3>
    //     <h3>$price</h3>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laboriosam!</p>
    //     <button>Add to cart <CiShoppingCart /></button>
    // </div>
  )
}

export default Card