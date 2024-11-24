import React from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import Scroll from "../components/Scroll";
import SingleProductDetails from "../components/SingleProductDetails";
import ProductImagesCarousel from "../components/ProductImagesCarousel";


function ProductDetails(props) {


    const {data} = props;
    console.log('details',data);

    return (
        <Wrapper>
            {/*<!-- <<<<<<<<<<<<<<<<<<<< Breadcumb Area Start <<<<<<<<<<<<<<<<<<<< -->*/}

            <div className="breadcumb_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ol className="breadcrumb d-flex align-items-center">
                                <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Dresses</Link></li>
                                <li className="breadcrumb-item active">Long Dress</li>
                            </ol>
                            {/*<!-- btn -->*/}
                            <Link to="#" className="backToHome d-block"><i
                                className="fa fa-angle-double-left"></i> Back to Category</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*<!-- <<<<<<<<<<<<<<<<<<<< Breadcumb Area End <<<<<<<<<<<<<<<<<<<< -->*/}


            {/*<!-- <<<<<<<<<<<<<<<<<<<< Single Product Details Area Start >>>>>>>>>>>>>>>>>>>>>>>>> -->*/}

            <SingleProductDetails data={data}/>

            {/*<!-- <<<<<<<<<<<<<<<<<<<< Single Product Details Area End >>>>>>>>>>>>>>>>>>>>>>>>> -->*/}

            <section className="you_may_like_area clearfix"
                     style={{padding: '100px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_heading text-center">
                                <h2>related Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="you_make_like_slider owl-carousel owl-theme owl-loaded">

                                <div className="carousel-inner">
                                    <ProductImagesCarousel data={data} />
                                </div>


                                <div className="owl-controls">
                                    <div className="owl-nav">
                                        <div className="owl-prev" style={{display: "none"}}>prev</div>
                                        <div className="owl-next" style={{display: "none"}}>next</div>
                                    </div>
                                    <div className="owl-dots">
                                        <div className="owl-dot active"><span></span></div>
                                        <div className="owl-dot"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Scroll/>
        </Wrapper>
    );
}

export default ProductDetails;
