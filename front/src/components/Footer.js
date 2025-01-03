import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (

            <footer className="footer_area">
                <div className="container">
                    <div className="row">
                        {/*<!-- Single Footer Area Start -->*/}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="single_footer_area">
                                <div className="footer-logo">
                                    <img src="/img/core-img/logo.png" alt=""/>
                                </div>
                                <div className="copywrite_text d-flex align-items-center">
                                    <p>{/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                                        Copyright ©
                                        <script>document.write(new Date().getFullYear());</script>
                                        2024 All rights reserved | Made with <i className="fa fa-heart-o"
                                                                                aria-hidden="true"></i> by <Link
                                            to="https://colorlib.com"
                                            target="_blank">Colorlib</Link> &amp; distributed by <Link
                                            to="https://themewagon.com" target="_blank">ThemeWagon</Link>
                                        {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Single Footer Area Start -->*/}
                        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                            <div className="single_footer_area">
                                <ul className="footer_widget_menu">
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Blog</Link></li>
                                    <li><Link to="#">Faq</Link></li>
                                    <li><Link to="#">Returns</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/*<!-- Single Footer Area Start -->*/}
                        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                            <div className="single_footer_area">
                                <ul className="footer_widget_menu">
                                    <li><Link to="#">My Account</Link></li>
                                    <li><Link to="#">Shipping</Link></li>
                                    <li><Link to="#">Our Policies</Link></li>
                                    <li><Link to="#">Afiliates</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/*<!-- Single Footer Area Start -->*/}
                        <div className="col-12 col-lg-5">
                            <div className="single_footer_area">
                                <div className="footer_heading mb-30">
                                    <h6>Subscribe to our newsletter</h6>
                                </div>
                                <div className="subscribtion_form">
                                    <form action="#" method="post">
                                        <input type="email" name="mail" className="mail"
                                               placeholder="Your email here"/>
                                        <button type="submit" className="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>

                    {/*<!-- Footer Bottom Area Start -->*/}
                    <div className="footer_bottom_area">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer_social_area text-center">
                                    <Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
                                    <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                    <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                    <Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;