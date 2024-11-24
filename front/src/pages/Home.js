import React from 'react';
import Wrapper from "../components/Wrapper";
import WelcomeCarousel from "../components/WelcomeCarousel";
import QuotesCarousel from "../components/QuotesCarousel";
import {Link, useNavigate} from "react-router-dom";
import Products from "../components/Products";
import Scroll from "../components/Scroll";
import {useEffect} from "react";
import {animateOnScroll} from "../untils/animateOnScroll";

function Home(props) {

    const {data} = props;

    const navigate = useNavigate();

        useEffect(() => {
            const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
            animateOnScroll(elementsToAnimate, "fadeInUp");
        }, [navigate]);

    return (
        <Wrapper>
            <div className="catagories-side-menu">
                {/*<!-- Close Icon -->*/}
                <div id="sideMenuClose">
                    <i className="ti-close"></i>
                </div>
                {/*<!--  Side Nav  -->*/}
                <div className="nav-side-menu">
                    <div className="menu-list">
                        <h6>Categories</h6>
                        <ul id="menu-content" className="menu-content collapse out">
                            {/*<!-- Single Item -->*/}
                            <li data-toggle="collapse" data-target="#women" className="collapsed active">
                                <Link to="/">Woman wear <span className="arrow"></span></Link>
                                <ul className="sub-menu collapse" id="women">
                                    <li><Link to="/">Midi Dresses</Link></li>
                                    <li><Link to="/">Maxi Dresses</Link></li>
                                    <li><Link to="/">Prom Dresses</Link></li>
                                    <li><Link to="/">Little Black Dresses</Link></li>
                                    <li><Link to="/">Mini Dresses</Link></li>
                                </ul>
                            </li>
                            {/*<!-- Single Item -->*/}
                            <li data-toggle="collapse" data-target="#man" className="collapsed">
                                <Link to="/">Man Wear <span className="arrow"></span></Link>
                                <ul className="sub-menu collapse" id="man">
                                    <li><Link to="/">Man Dresses</Link></li>
                                    <li><Link to="/">Man Black Dresses</Link></li>
                                    <li><Link to="/">Man Mini Dresses</Link></li>
                                </ul>
                            </li>
                            {/*<!-- Single Item -->*/}
                            <li data-toggle="collapse" data-target="#kids" className="collapsed">
                                <Link to="/">Children <span className="arrow"></span></Link>
                                <ul className="sub-menu collapse" id="kids">
                                    <li><Link to="/">Children Dresses</Link></li>
                                    <li><Link to="/">Mini Dresses</Link></li>
                                </ul>
                            </li>
                            {/*<!-- Single Item -->*/}
                            <li data-toggle="collapse" data-target="#bags" className="collapsed">
                                <Link to="/">Bags &amp; Purses <span className="arrow"></span></Link>
                                <ul className="sub-menu collapse" id="bags">
                                    <li><Link to="/">Bags</Link></li>
                                    <li><Link to="/">Purses</Link></li>
                                </ul>
                            </li>
                            {/*<!-- Single Item -->*/}
                            <li data-toggle="collapse" data-target="#eyewear" className="collapsed">
                                <Link to="/">Eyewear <span className="arrow"></span></Link>
                                <ul className="sub-menu collapse" id="eyewear">
                                    <li><Link to="/">Eyewear Style 1</Link></li>
                                    <li><Link to="/">Eyewear Style 2</Link></li>
                                    <li><Link to="/">Eyewear Style 3</Link></li>
                                </ul>
                            </li>
                            {/*<!-- Single Item -->*/}
                            <li data-toggle="collapse" data-target="#footwear" className="collapsed">
                                <Link to="/">Footwear <span className="arrow"></span></Link>
                                <ul className="sub-menu collapse" id="footwear">
                                    <li><Link to="/">Footwear 1</Link></li>
                                    <li><Link to="/">Footwear 2</Link></li>
                                    <li><Link to="/">Footwear 3</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="wrapper">

                {/*<!-- ****** Welcome Slides Area Start ****** -->*/}
                <WelcomeCarousel/>
                {/*<!-- ****** Welcome Slides Area End ****** -->*/}

                {/*<!-- ****** Top Catagory Area Start ****** -->*/}
                <section className="top_catagory_area d-md-flex clearfix">
                    {/*<!-- Single Catagory -->*/}
                    <div className="single_catagory_area d-flex align-items-center bg-img"
                         style={{backgroundImage: 'url(img/bg-img/bg-2.jpg)'}}>
                        <div className="catagory-content">
                            <h6>On Accesories</h6>
                            <h2>Sale 30%</h2>
                            <Link to="/" className="btn karl-btn">SHOP NOW</Link>
                        </div>
                    </div>
                    {/*<!-- Single Catagory -->*/}
                    <div className="single_catagory_area d-flex align-items-center bg-img"
                         style={{backgroundImage: 'url(img/bg-img/bg-3.jpg)'}}>
                        <div className="catagory-content">
                            <h6>in Bags excepting the new collection</h6>
                            <h2>Designer bags</h2>
                            <Link to="/" className="btn karl-btn">SHOP NOW</Link>
                        </div>
                    </div>
                </section>
                {/*<!-- ****** Top Catagory Area End ****** -->*/}


                {/*<!-- ****** New Arrivals Area Start ****** -->*/}
                <section className="new_arrivals_area section_padding_100_0 clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section_heading text-center">
                                    <h2>New Arrivals</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="karl-projects-menu mb-100">
                        <div className="text-center portfolio-menu">
                            <button className="btn active" data-filter="*">ALL</button>
                            <button className="btn" data-filter=".women">WOMAN</button>
                            <button className="btn" data-filter=".man">MAN</button>
                            <button className="btn" data-filter=".access">ACCESSORIES</button>
                            <button className="btn" data-filter=".shoes">shoes</button>
                            <button className="btn" data-filter=".kids">KIDS</button>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row karl-new-arrivals" style={{position: 'relative', height: '1499.38px'}}>

                            <Products data={data}/>

                        </div>
                    </div>
                </section>
                {/*<!-- ****** New Arrivals Area End ****** -->*/}

                {/*<!-- ****** Offer Area Start ****** -->*/}
                <section className="offer_area height-700 section_padding_100 bg-img"
                         style={{backgroundImage: 'url(img/bg-img/bg-5.jpg)'}}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-end justify-content-end">
                            <div className="col-12 col-md-8 col-lg-6">
                                <div className="offer-content-area wow fadeInUp" data-wow-delay="1s"
                                     style={{visibility: 'visible', animationDelay: '1s', animationName: 'fadeInUp'}}>
                                    <h2>White t-shirt <span className="karl-level">Hot</span></h2>
                                    <p>* Free shipping until 25 Dec 2017</p>
                                    <div className="offer-product-price">
                                        <h3><span className="regular-price">$25.90</span> $15.90</h3>
                                    </div>
                                    <Link to="/" className="btn karl-btn mt-30">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<!-- ****** Offer Area End ****** -->*/}

                {/*<!-- ****** Popular Brands Area Start ****** -->*/}
                <section className="karl-testimonials-area section_padding_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section_heading text-center">
                                    <h2>Testimonials</h2>
                                </div>
                            </div>
                        </div>

                        <QuotesCarousel/>

                    </div>
                </section>

            </div>

            <Scroll/>


        </Wrapper>
    );
}

export default Home;