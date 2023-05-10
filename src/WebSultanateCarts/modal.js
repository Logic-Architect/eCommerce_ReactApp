import React, { useState, useEffect } from 'react'
import './modal.css'


const Modal = ({ closeModal, cart }) => {

    const [index, setIndex] = useState(0);
    let nextProd = () => {
        if(index<cart.length-1){
            setIndex(index + 1);
        }
        console.log('Now Index Is', index);
    }
    let prevProd = () => {
        if(index>0){
            setIndex(index - 1);
        }
        console.log('Now Index Is', index);
    }
    let total=0;
    for(let cost of cart){
        total = total + (cost.product_detail.sold_at-cost.product_detail.sold_at*cost.product_detail.discount/100)*cost.quantity_buyed
    }

    return (

        <>

            <div className="modal-container">
                <div className="modal-window">
                    <div className="header">
                        <p className="heading">My Cart</p>
                        <p id="close-modal" className='hover-effect' onClick={() => closeModal(false)}>X</p>
                    </div>
                    <div className="main">
                        <div className="previous hover-effect" onClick={() => { prevProd() }}>
                            <p>
                            &lt;
                            </p>
                        </div>
                        <div className="productInfo">
                            <div className="modal-image">
                                <p>Image</p>
                            </div>
                            <div className="details">
                                <div className="product-name  hover-effect">
                                    {cart[index].product_detail.product_name}
                                </div>
                                <div className="seller-name">
                                    {cart[index].product_detail.sold_by}
                                </div>
                                <div className="minor">
                                    <div className="cost">
                                    Cost &#8377;{cart[index].product_detail.sold_at}
                                    </div>
                                    <div>
                                        Discount {
                                            cart[index].product_detail.discount
                                        }%
                                    </div>
                                    <div className="qty">
                                       Qunatity {cart[index].quantity_buyed}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="next hover-effect" onClick={() => { nextProd() }}>
                            <p>
                            &gt;
                            </p>
                        </div>
                    </div>
                    <div className="footer">
                        <p className="total hover-effect">
                            Total &#8377;
                            {
                             total
                            }
                        </p>
                        <p className="close  hover-effect" onClick={() => closeModal(false)}>
                            Close
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal