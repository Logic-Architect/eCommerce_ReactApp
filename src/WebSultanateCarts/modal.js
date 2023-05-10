import React, { useState, useEffect } from 'react'
import './modal.css'


let mycart = []


const Modal = ({ closeModal, cart }) => {

    const [index, setIndex] = useState(0);
    let nextProd = () => {
        setIndex(index + 1);
        console.log('Now Index Is', index);
    }
    let prevProd = () => {
        setIndex(index - 1);
        console.log('Now Index Is', index);
    }

    return (

        <>

            <div className="modal-container">
                <div className="modal-window">
                    <div className="header">
                        <p className="heading">My Cart</p>
                        <p id="close-modal" onClick={() => closeModal(false)}>X</p>
                    </div>
                    <div className="main">
                        <div className="previous" onClick={() => { prevProd() }}>
                            &lt;
                        </div>
                        <div className="productInfo">
                            <div className="modal-image">
                                <p>Image</p>
                            </div>
                            <div className="details">
                                <div className="product-name">
                                    {cart[index].product_detail.product_name}
                                </div>
                                <div className="seller-name">
                                    {cart[index].product_detail.sold_by}
                                </div>
                                <div className="minor">
                                    <div className="cost">
                                    &#8377;{cart[index].product_detail.sold_at}
                                    </div>
                                    <div className="qty">
                                       Qunatity {cart[index].quantity_buyed}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="next" onClick={() => { nextProd() }}>
                            &gt;
                        </div>
                    </div>
                    <div className="footer">
                        <p className="close" onClick={() => closeModal(false)}>
                            Close
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal