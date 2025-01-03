import React, {Component} from 'react';
import Wrapper from "../components/Wrapper";
import Scroll from "../components/Scroll";
import {Link} from "react-router-dom";

class Checkout extends Component {
    render() {
        return (

            <Wrapper>
                <div className="checkout_area section_padding_100">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-6">
                                <div className="checkout_details_area mt-50 clearfix">

                                    <div className="cart-page-heading">
                                        <h5>Billing Address</h5>
                                        <p>Enter your cupone code</p>
                                    </div>

                                    <form action="#" method="post">
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="first_name">First Name <span>*</span></label>
                                                <input type="text" className="form-control" id="first_name" value=""
                                                       required=""/>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="last_name">Last Name <span>*</span></label>
                                                <input type="text" className="form-control" id="last_name" value=""
                                                       required=""/>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="company">Company Name</label>
                                                <input type="text" className="form-control" id="company" value=""/>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="country">Country <span>*</span></label>
                                                <select className="custom-select d-block w-100" id="country">
                                                    <option value="usa">United States</option>
                                                    <option value="uk">United Kingdom</option>
                                                    <option value="ger">Germany</option>
                                                    <option value="fra">France</option>
                                                    <option value="ind">India</option>
                                                    <option value="aus">Australia</option>
                                                    <option value="bra">Brazil</option>
                                                    <option value="cana">Canada</option>
                                                </select>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="street_address">Address <span>*</span></label>
                                                <input type="text" className="form-control mb-3" id="street_address"
                                                       value=""/>
                                                <input type="text" className="form-control" id="street_address2"
                                                       value=""/>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="postcode">Postcode <span>*</span></label>
                                                <input type="text" className="form-control" id="postcode" value=""/>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="city">Town/City <span>*</span></label>
                                                <input type="text" className="form-control" id="city" value=""/>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="state">Province <span>*</span></label>
                                                <input type="text" className="form-control" id="state" value=""/>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="phone_number">Phone No <span>*</span></label>
                                                <input type="number" className="form-control" id="phone_number"
                                                       min="0" value=""/>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <label htmlFor="email_address">Email Address <span>*</span></label>
                                                <input type="email" className="form-control" id="email_address"
                                                       value=""/>
                                            </div>

                                            <div className="col-12">
                                                <div className="custom-control custom-checkbox d-block mb-2">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="customCheck1"/>
                                                    <label className="custom-control-label" htmlFor="customCheck1">Terms
                                                        and conitions</label>
                                                </div>
                                                <div className="custom-control custom-checkbox d-block mb-2">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="customCheck2"/>
                                                    <label className="custom-control-label" htmlFor="customCheck2">Create
                                                        an accout</label>
                                                </div>
                                                <div className="custom-control custom-checkbox d-block">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="customCheck3"/>
                                                    <label className="custom-control-label" htmlFor="customCheck3">Subscribe
                                                        to our newsletter</label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
                                <div className="order-details-confirmation">

                                    <div className="cart-page-heading">
                                        <h5>Your Order</h5>
                                        <p>The Details</p>
                                    </div>

                                    <ul className="order-details-form mb-4">
                                        <li><span>Product</span> <span>Total</span></li>
                                        <li><span>Cocktail Yellow dress</span> <span>$59.90</span></li>
                                        <li><span>Subtotal</span> <span>$59.90</span></li>
                                        <li><span>Shipping</span> <span>Free</span></li>
                                        <li><span>Total</span> <span>$59.90</span></li>
                                    </ul>


                                    <div id="accordion" role="tablist" className="mb-4">
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingOne">
                                                <h6 className="mb-0">
                                                    <Link data-toggle="collapse" to="#collapseOne"
                                                       aria-expanded="false" aria-controls="collapseOne"><i
                                                        className="fa fa-circle-o mr-3"></i>Paypal</Link>
                                                </h6>
                                            </div>

                                            <div id="collapseOne" className="collapse" role="tabpanel"
                                                 aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Proin pharetra tempor so dales. Phasellus sagittis auctor
                                                        gravida. Integ er bibendum sodales arcu id te mpus. Ut
                                                        consectetur lacus.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingTwo">
                                                <h6 className="mb-0">
                                                    <Link className="collapsed" data-toggle="collapse"
                                                       to="#collapseTwo" aria-expanded="false"
                                                       aria-controls="collapseTwo"><i
                                                        className="fa fa-circle-o mr-3"></i>cash on delievery</Link>
                                                </h6>
                                            </div>
                                            <div id="collapseTwo" className="collapse" role="tabpanel"
                                                 aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Explicabo quis in veritatis officia inventore, tempore
                                                        provident dignissimos.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingThree">
                                                <h6 className="mb-0">
                                                    <Link className="collapsed" data-toggle="collapse"
                                                       to="#collapseThree" aria-expanded="false"
                                                       aria-controls="collapseThree"><i
                                                        className="fa fa-circle-o mr-3"></i>credit card</Link>
                                                </h6>
                                            </div>
                                            <div id="collapseThree" className="collapse" role="tabpanel"
                                                 aria-labelledby="headingThree" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Esse quo sint repudiandae suscipit ab soluta delectus
                                                        voluptate, vero vitae</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="headingFour">
                                                <h6 className="mb-0">
                                                    <Link className="collapsed" data-toggle="collapse"
                                                       to="#collapseFour" aria-expanded="true"
                                                       aria-controls="collapseFour"><i
                                                        className="fa fa-circle-o mr-3"></i>direct bank transfer</Link>
                                                </h6>
                                            </div>
                                            <div id="collapseFour" className="collapse show" role="tabpanel"
                                                 aria-labelledby="headingThree" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                                                        cum autem eveniet saepe fugit, impedit magni.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to="/" className="btn karl-checkout-btn">Place Order</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Scroll/>
            </Wrapper>
        );
    }
}

export default Checkout;