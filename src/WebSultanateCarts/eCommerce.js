import React, { useEffect, useState } from 'react'
import './style.css'
import Product from './product.js'

const Temp = () => {
    const [searchValue, setSearchValue] = useState("");
    const [productInfo , setProductInfo] = useState([]);
    
    // console.log(searchValue)
    
    const getProducts = async () => {
        try {
            let url = "http://localhost:8000/api/v1/product/view-all";
            let res = await fetch(url, {
                method: 'GET',
                mode: 'cors'
            });
            let data = await res.json();
            let prod = [];
            for (let i of data.product) {
                let obj={
                    product_name : i.product_name,
                    seller_name : i.seller_name,
                    seller_email : i.seller_email,
                    price : i.sell_price,
                    qty_available : i.item_count
                }
                // console.log(obj);
                prod.push(obj)
            }
            // console.log(prod);
            setProductInfo(prod);
            // console.log(productInfo);
        } catch (error) {
            console.log(error);
        }
    }

    const sellProducts = async()=>{

    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <nav>
                <div className="logo">
                    WebSultanante Carts
                </div>
                <div className="menu">
                    <p className='hover-effect'>Create</p>
                    <p className='hover-effect' >Sell</p>
                    <p className='hover-effect' >My Cart
                    </p>
                </div>
            </nav>
            <main>
                <section className="search">
                    <div>
                        <input type="search" name="" id="search" placeholder='Search a product ...' autoFocus autoComplete='Product1'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)} />
                        <i className="fa-sharp fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
                    </div>
                </section>


                <section className="products">
                 {productInfo.map((cE)=>{
                    return (<Product productInfo={cE} />)
                 })}
                    


                </section>


            </main>
        </>
    )
}

export default Temp