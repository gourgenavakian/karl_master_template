import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            cartShow: false
        }
    }


    handleClick = () => {
        this.setState({
            show: !this.state.show
        })
    }

    handleCartShow = () => {
        this.setState({
            cartShow: !this.state.cartShow
        })
    }

    render() {

        const {show, cartShow} = this.state;
        return (

            <div>
                <header className="header_area bg-img background-overlay-white"
                        style={{backgroundImage: "url(img/bg-img/bg-1.jpg)"}}>
                    {/*<!-- Top Header Area Start -->*/}
                    <div className="top_header_area">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center justify-content-end">

                                <div className="col-12 col-lg-7">
                                    <div className="top_single_area d-flex align-items-center">
                                        {/*<!-- Logo Area -->*/}
                                        <div className="top_logo">
                                            <Link to="#"><img src="/img/core-img/logo.png" alt=""/></Link>
                                        </div>
                                        {/*<!-- Cart & Menu Area -->*/}
                                        <div className="header-cart-menu d-flex align-items-center ml-auto">
                                            {/*<!-- Cart Area -->*/}
                                            <div className="cart">
                                                <Link to="#"
                                                      id="header-cart-btn"
                                                      onClick={this.handleCartShow}
                                                    // target="_blank"
                                                >
                                                    <span
                                                        className="cart_quantity">2</span>
                                                    <i className="ti-bag"></i > Your Bag $20</Link>
                                                {/*<!-- Cart List Area Start -->*/}
                                                { cartShow ? <ul className="cart-list" style={{display: 'block'}} >
                                                    <li>
                                                        <Link to="#" className="image"><img
                                                            src="/img/product-img/product-10.jpg"
                                                            className="cart-thumb" alt=""/></Link>
                                                        <div className="cart-item-desc">
                                                            <h6><Link to="#">Women's Fashion</Link></h6>
                                                            <p>1x - <span className="price">$10</span></p>
                                                        </div>
                                                        <span className="dropdown-product-remove"><i
                                                            className="icon-cross"></i></span>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="image"><img
                                                            src="/img/product-img/product-11.jpg"
                                                            className="cart-thumb" alt=""/></Link>
                                                        <div className="cart-item-desc">
                                                            <h6><Link to="#">Women's Fashion</Link></h6>
                                                            <p>1x - <span className="price">$10</span></p>
                                                        </div>
                                                        <span className="dropdown-product-remove"><i
                                                            className="icon-cross"></i></span>
                                                    </li>
                                                    <li className="total">
                                                        <span className="pull-right">Total: $20.00</span>
                                                        <Link to="/cart"
                                                              className="btn btn-sm btn-cart"
                                                              onClick={this.handleCartShow}>Cart</Link>
                                                        <Link to="/checkout"
                                                              className="btn btn-sm btn-checkout">Checkout</Link>
                                                    </li>
                                                </ul> : null}
                                            </div>
                                            <div className="header-right-side-menu ml-15">
                                                <Link to="#" id="sideMenuBtn" ><i className="ti-menu" aria-hidden="true"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/*<!-- Top Header Area End -->*/}
                    <div className="main_header_area">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 d-md-flex justify-content-between">
                                    {/*<!-- Header Social Area -->*/}
                                    <div className="header-social-area">
                                        <Link to="#"><span className="karl-level">Share</span> <i
                                            className="fa fa-pinterest" aria-hidden="true"></i></Link>
                                        <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                        <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                        <Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                                    </div>
                                    {/*<!-- Menu Area -->*/}
                                    <div className="main-menu-area">
                                        <nav className="navbar navbar-expand-lg align-items-start">

                                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                    data-target="#karl-navbar" aria-controls="karl-navbar"
                                                    aria-expanded="false" aria-label="Toggle navigation"><span
                                                className="navbar-toggler-icon"><i className="ti-menu"></i></span>
                                            </button>

                                            <div className="collapse navbar-collapse align-items-start collapse"
                                                 id="karl-navbar">
                                                <ul className="navbar-nav animated" id="nav">
                                                    <li className="nav-item active"><Link className="nav-link"
                                                                                          to="/">Home</Link>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <Link className="nav-link dropdown-toggle" to="#"
                                                              id="karlDropdown"
                                                              role="button"
                                                              data-toggle="dropdown"
                                                              aria-haspopup="true"
                                                              aria-expanded="false"
                                                              onClick={this.handleClick}>Pages</Link>
                                                        {show ? <div className="dropdown-menu"
                                                                     aria-labelledby="karlDropdown"
                                                                     style={{display: 'block'}}>
                                                            <Link className="dropdown-item" to="/">Home</Link>
                                                            <Link className="dropdown-item" to="/shop">Shop</Link>
                                                            <Link className="dropdown-item"
                                                                  to="/product-details">Product Details</Link>
                                                            <Link className="dropdown-item" to="/cart">Cart</Link>
                                                            <Link className="dropdown-item"
                                                                  to="/checkout">Checkout</Link>
                                                        </div>: null}
                                                    </li>
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to="#">Dresses</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to="#"><span
                                                        className="karl-level">hot</span> Shoes</Link></li>
                                                    <li className="nav-item"><Link className="nav-link"
                                                                                   to="#">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    {/*<!-- Help Line -->*/}
                                    <div className="help-line">
                                        <Link to="tel:+346573556778"><i className="ti-headphone-alt"></i> +34 657
                                            3556 778</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="top-discount-area d-md-flex align-items-center">

                    <div className="single-discount-area">
                        <h5>Free Shipping &amp; Returns</h5>
                        <h6><Link to="#">BUY NOW</Link></h6>
                    </div>

                    <div className="single-discount-area">
                        <h5>20% Discount for all dresses</h5>
                        <h6>USE CODE: ColorLib</h6>
                    </div>

                    <div className="single-discount-area">
                        <h5>20% Discount for students</h5>
                        <h6>USE CODE: ColorLib</h6>
                    </div>
                </section>
            </div>

        );
    }
}

export default Header;


