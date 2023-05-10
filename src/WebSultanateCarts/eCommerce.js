import React, { useEffect, useState } from 'react'
import './style.css'
import Product from './product.js';
import Modal from './modal'

const Temp = () => {
    const [searchValue, setSearchValue] = useState("");
    const [productInfo , setProductInfo] = useState([]);
    const [viewModal, setViewModal] = useState(false);
    const [cart, setCart] = useState([])
   
    
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

    const sell = async ()=>{
        try {
            let seller_name  = prompt('Enter Seller Name','guest')
            let seller_email = prompt('Enter Seller Email','guest@gmail.com')
            let product_name = prompt('Enter Product Info','guestProduct')
            let item_count   = prompt('Enter NO of Products TO sell','100')
            let buy_price    = prompt('Enter Price At which You Buyed','1000')
            let sell_price   = prompt('Enter the Price At Which You Want To Sell','1500')
            let discount     = prompt('Discount %','20')
            const url = 'http://localhost:8000/api/v1/seller/sell-product'
            const res = await fetch(url, {
                method: 'post',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    seller_name  : seller_name ,
                    seller_email : seller_email,
                    product_name : product_name,
                    item_count   : item_count,
                    buy_price    : buy_price,
                    sell_price   : sell_price,
                    discount     : discount
                })
            });
            let data = await res.json();
            console.log(data)
            alert(data.message)
        } catch (error) {
            console.log(error)
            
        }
    }
    const viewCart = async()=>{
        const user = prompt('Enter User Email', 'guest@abc.com');
        const url = 'http://localhost:8000/api/v1/user/view-cart/?user_email=' + user;
        const res = await fetch(url, {
            method: 'get',
            mode: 'cors'
        })
        let data = await res.json();
        console.log('1245', data.product_info);
        let myCart = [];
        for (let l of data.product_info) {
            myCart.push(l)
        }
        console.log('lkjh', myCart);
    
        setCart(myCart);
     
        console.log('qwer', cart)
        setViewModal(true)
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
                    <p className='hover-effect' onClick={()=>{sell()}}>Sell</p>
                    <p className='hover-effect' onClick={()=>{viewCart()}}>My Cart
                    </p>
                    {viewModal&&(<Modal closeModal={setViewModal} cart={cart}/>)}
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