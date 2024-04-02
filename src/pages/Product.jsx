

import React, { useEffect, useState } from 'react'
import Card from '../components/Card'


const Product = () => {
  const [productdata, setproductdata] = useState(null)
  const api = 'http://localhost:8000/products'
  const fetchData = () => {
    fetch(api)
    .then((res) => res.json())
    .then((data) => setproductdata(data)) 
    .catch((error) => console.error(error))
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
     {/* <button onClick={fetchData}>Fetch products</button> */}

      <h1 style={{textAlign: "center"}}>List of product</h1>
      <div style={{display:"flex", flexWrap: "wrap", gap: "25px"}}>
      {
        productdata && productdata.map((products) => (
          <Card  img={products.productImg} des={products.productDes} name={products.productName} price={products.productPrice} />
        ))
      }
      </div>

    </div>
  )
}

export default Product