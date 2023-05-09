import React ,{ useEffect, useState } from 'react'
import './style.css'

const Product = (productInfo, user) => {
    // console.log('hahaha', productInfo.productInfo.product_name);

    const addToCart = async (e) => {
        try {
            let user_email=prompt('Enter User Email', 'guest@abc.com');
            console.log('0',user_email);
            var qty = prompt('Enter Quantity', 1)
            const url = 'http://localhost:8000/api/v1/user/add-to-cart'
            const res = await fetch(url, {
                method: 'post',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    buyer_email: user_email,
                    seller_email: productInfo.productInfo.seller_email,
                    product_name: productInfo.productInfo.product_name,
                    item_count: qty,
                })
            });
            let data = await res.json();
            alert(data.message);
            console.log(data.message);
        } catch (error) {
            console.log(error)
        }
    }

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
                        <i className="fa-solid fa-cart-plus font-effect" onClick={(e) => { addToCart(e) }}></i>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Product