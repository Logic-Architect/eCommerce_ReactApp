import React from 'react'
import './style.css'

const Product = (productInfo) => {
    console.log('hahaha',productInfo.productInfo.product_name)
  return (
    <>
         <div className="box hover-effect">
                        <section className="image">
                            Image
                        </section>
                        <section className="product-name">
                            <p>
                                {productInfo.productInfo.product_name}
                            </p>
                        </section>
                        <section className="seller-name">
                            <p>{productInfo.productInfo.seller_name}</p>
                        </section>
                        <section className="action-bar">
                            <div className="cost">
                            &#8377;{productInfo.productInfo.price}
                            </div>
                            <div className="cart-logo">
                            <i className="fa-solid fa-cart-plus font-effect"></i>
                            </div>
                        </section>
                    </div>

    </>
  )
}

export default Product