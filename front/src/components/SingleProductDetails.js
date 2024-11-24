import React, {useEffect, useState} from 'react';
import Carousel from "react-multi-carousel";
import {Link} from "react-router-dom";
import CartForm from "./CartForm";
import '../assets/css/STYLES.css'

function SingleProductDetails(props) {
    const {data} = props;

    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [cardShow, setCardShow] = useState(false);
    const [infoShow, setInfoShow] = useState(true);
    const [shippingShow, setShippingShow] = useState(false);


    useEffect(() => {
        console.log(currentProductIndex);
        console.log('product ', data[currentProductIndex]);
    }, [currentProductIndex]);

    const handleCarouselChange = (index) => {

        index < data.length ? setCurrentProductIndex(index) : setCurrentProductIndex(0);

        console.log(currentProductIndex);
    }

    const handleCardInfoShow = () => {
        setCardShow(!cardShow);
    }

    const handleInfoShow = () => {
        setInfoShow(!infoShow);
    }

    const handleShippingShow = () => {
        setShippingShow(!shippingShow);
    }


    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };


    return (
        <section className="single_product_details_area section_padding_0_100">
        <div className="container">
            <div className="row">

                <div className="col-12 col-md-6">
                    <div className="single_product_thumb">
                        <div id="product_details_slider" className="carousel slide"
                             data-ride="carousel">

                            <ol className="carousel-indicators">

                                {data.map((item, index) => (
                                    index <= 4 && (
                                    <li key={item._id}
                                        data-target="#product_details_slider"
                                        data-slide-to={index}
                                        onClick={() => handleCarouselChange(index)}
                                        style={{backgroundImage: `url(${item.img})`}}>
                                    </li>
                                    )
                                ))}

                            </ol>

                            <div className="carousel-inner">
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={5000}
                                    showDots={false}
                                    arrows={false}
                                    swipeable={true}
                                    draggable={true}
                                    transitionDuration={500}
                                    customTransition="transform 0.5s ease-in-out"
                                    afterChange={(index) =>handleCarouselChange(index - 1)}
                                >
                                    {data.map((product, index) => (

                                        <div key={index} className="carousel-item active">
                                            <Link className="gallery_img" to="/shop">
                                                <img className="d-block w-100"
                                                     src={product.img} alt={`${product.id} product`}/>
                                            </Link>
                                        </div>
                                    ))}
                                </Carousel>

                            </div>
                        </div>
                    </div>
                </div>


                    <div className="col-12 col-md-6" style={{transition: 'ease 0.3s'}}>


                        <div className="single_product_desc">


                            <h4 className="title" style={{transition: '0.5s'}}><Link to="#">{data[currentProductIndex].name}</Link></h4>

                            <h4 className="price">$ {data[currentProductIndex].price}</h4>

                            <p className="available">Available: <span
                                className="text-muted">{data[currentProductIndex].available}</span>
                            </p>


                            <div className="single_product_ratings mb-15">
                                {Array.from({length: data[currentProductIndex].rate}).map((_, index) => (
                                    <i key={index} className="fa fa-star" aria-hidden="true"></i>
                                ))}
                            </div>

                            <div className="widget size mb-50">
                                <h6 className="widget-title">Size</h6>
                                <div className="widget-desc">
                                    <ul>
                                        {data[currentProductIndex].sizes.map((item, index) => (
                                            <li key={index}><Link to="#">{item}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/*<!-- Add to Cart Form -->*/}
                            <CartForm/>

                            <div id="accordion" role="tablist">
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingOne">
                                        <h6 className="mb-0">
                                            <Link data-toggle="collapse"
                                                  to="#collapseOne"
                                                  aria-expanded="true"
                                                  aria-controls="collapseOne"
                                                  style={{cursor: 'pointer'}}
                                                  onClick={handleInfoShow}

                                            >Information</Link>
                                        </h6>
                                    </div>

                                    {
                                        infoShow ? (
                                            <div id="collapseOne" className="collapse show" role="tabpanel"
                                                 aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>{data[currentProductIndex].information}</p>
                                                    <p>Approx length 66cm/26" (Based on a UK size 8 sample) Mixed
                                                        fibres</p>
                                                    <p>The Model wears a UK size 8/ EU size 36/ US size 4 and her
                                                        height is 5'8"</p>
                                                </div>
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingTwo">
                                        <h6 className="mb-0">
                                            <Link className="collapsed"
                                                  data-toggle="collapse"
                                                  to="#collapseTwo"
                                                  aria-expanded="false"
                                                  aria-controls="collapseTwo"
                                                  style={{cursor: 'pointer'}}
                                                  onClick={handleCardInfoShow}

                                            >Cart Details</Link>
                                        </h6>
                                    </div>
                                    {
                                        cardShow ? (
                                            <div id="collapseTwo" className="" role="tabpanel"
                                                 aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Explicabo quis in veritatis officia inventore, tempore
                                                        provident dignissimos nemo, nulla quaerat. Quibusdam non,
                                                        eos, voluptatem reprehenderit hic nam! Laboriosam, sapiente!
                                                        Praesentium.</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Officia magnam laborum eaque.</p>
                                                </div>
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingThree">
                                        <h6 className="mb-0">
                                            <Link className="collapsed"
                                                  data-toggle="collapse"
                                                  to="#"
                                                  aria-expanded="false"
                                                  aria-controls="collapseThree"
                                                  style={{cursor: 'pointer'}}
                                                  onClick={handleShippingShow}

                                            >shipping &amp; Returns</Link>
                                        </h6>
                                    </div>
                                    {
                                        shippingShow ? (
                                            <div id="collapseThree" className="" role="tabpanel"
                                                 aria-labelledby="headingThree" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Esse quo sint repudiandae suscipit ab soluta delectus
                                                        voluptate, vero vitae, tempore maxime rerum iste dolorem
                                                        mollitia perferendis distinctio. Quibusdam laboriosam rerum
                                                        distinctio. Repudiandae fugit odit, sequi id!</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Beatae qui maxime consequatur laudantium temporibus ad et. A
                                                        optio inventore deleniti ipsa.</p>
                                                </div>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>

                        </div>


                    </div>


            </div>
        </div>
        </section>
    );
}

export default SingleProductDetails;