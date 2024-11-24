import React, { useState, useEffect } from 'react';
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import axios from "axios";

function Cart() {
    const [quantity, setQuantity] = useState(1);
    const price = 49.88;
    const subtotal = (quantity * price).toFixed(2);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {

                const res = await axios.get('http://localhost:8080/items-in-cart');
                console.log('===================================================================================')
                console.log('cart data', res.data.data);
                setData(res.data.data);
                console.log('-----------------------------------');
                console.log(data);

            }catch (error) {
                console.log(error);
            }
        }
        fetchData().then(() => {
            console.log('Fetching data from server');
        })
    }, []);

    useEffect(() => {
        console.log('Cart updated successfully', data);
    }, [data])

    const handleQuantityChange = (action) => {
        setQuantity((prev) => {
            if (action === "increment") return prev + 1;
            if (action === "decrement" && prev > 1) return prev - 1;
            return prev;
        });
    };

    return (
        <Wrapper>
            <div className="cart_area section_padding_100 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-table clearfix">
                                <table className="table table-responsive">
                                    <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>


                                    {data.map((item) => (
                                        item.items.map((product) => (
                                            <tr>
                                                <td className="cart_product_img d-flex align-items-center">
                                                    <Link to="#">
                                                        <img src={product.img} alt="Product"/>
                                                    </Link>
                                                    <h6>{product.name}</h6>
                                                </td>
                                                <td className="price"><span>${price.toFixed(2)}</span></td>
                                                <td className="qty">
                                                    <div className="quantity d-flex align-items-center">

                                                <span className="qty-minus"
                                                      onClick={() => {
                                                          const qtyInput = document.getElementById('qty');
                                                          let qty = parseInt(qtyInput.value, 10);
                                                          if (!isNaN(qty) && qty > 1) qtyInput.value = qty - 1;
                                                      }}
                                                      style={{
                                                          backgroundColor: '#ebeaea',
                                                          color: '#333',
                                                          cursor: 'pointer',
                                                          display: 'inline-block'
                                                      }}>
                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                </span>
                                                        <input type="number" className="qty-text" id="qty" step="1"
                                                               min="1"
                                                               max="99" name="quantity" value="1"
                                                               style={{textAlign: 'center', width: '50px'}}/>
                                                        <span className="qty-plus"
                                                              onClick={() => {
                                                                  const qtyInput = document.getElementById('qty');
                                                                  let qty = parseInt(qtyInput.value, 10);
                                                                  if (!isNaN(qty)) qtyInput.value = qty + 1;
                                                              }}
                                                              style={{
                                                                  backgroundColor: '#ebeaea',
                                                                  color: '#333',
                                                                  cursor: 'pointer',
                                                                  display: 'inline-block'
                                                              }}>
                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                </span>
                                                    </div>
                                                </td>
                                                <td className="total_price"><span>${subtotal}</span></td>
                                            </tr>
                                        ))
                                    ))}


                                    </tbody>
                                </table>
                            </div>

                            <div className="cart-footer d-flex mt-30">
                                <div className="back-to-shop w-50">
                                    <Link to="/shop">Continue shopping</Link>
                                </div>
                                <div className="update-checkout w-50 text-right">
                                    <Link to="#" className="clear-cart-btn">Clear cart</Link>
                                    <Link to="#" className="update-cart-btn">Update cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shipping, Coupon, and Cart Summary */}
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="coupon-code-area mt-70">
                                <div className="cart-page-heading">
                                    <h5>Coupon code</h5>
                                    <p>Enter your coupon code</p>
                                </div>
                                <form action="#">
                                    <input type="search" name="search" placeholder="#569ab15"/>
                                    <button type="submit">Apply</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="shipping-method-area mt-70">
                                <div className="cart-page-heading">
                                    <h5>Shipping method</h5>
                                    <p>Select the one you want</p>
                                </div>
                                <div className="custom-control custom-radio mb-30">
                                    <input type="radio" id="customRadio1" name="customRadio"
                                           className="custom-control-input"/>
                                    <label
                                        className="custom-control-label d-flex align-items-center justify-content-between"
                                        htmlFor="customRadio1">
                                        <span>Next day delivery</span><span>$4.99</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-radio mb-30">
                                    <input type="radio" id="customRadio2" name="customRadio"
                                           className="custom-control-input"/>
                                    <label
                                        className="custom-control-label d-flex align-items-center justify-content-between"
                                        htmlFor="customRadio2">
                                        <span>Standard delivery</span><span>$1.99</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadio3" name="customRadio"
                                           className="custom-control-input"/>
                                    <label
                                        className="custom-control-label d-flex align-items-center justify-content-between"
                                        htmlFor="customRadio3">
                                    <span>Personal Pickup</span><span>Free</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="cart-total-area mt-70">
                                <div className="cart-page-heading">
                                    <h5>Cart total</h5>
                                    <p>Final info</p>
                                </div>
                                <ul className="cart-total-chart">
                                    <li><span>Subtotal</span> <span>${subtotal}</span></li>
                                    <li><span>Shipping</span> <span>Free</span></li>
                                    <li><span><strong>Total</strong></span> <span><strong>${subtotal}</strong></span></li>
                                </ul>
                                <Link to="/checkout" className="btn karl-checkout-btn">Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Cart;
