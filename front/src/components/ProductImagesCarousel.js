import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom";


function CarouselProductImages(props) {

    const {data} = props;
    console.log(data, 'carousel');


    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
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
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2700}
            showDots={false}
            arrows={false}
            swipeable={true}
            draggable={true}
        >
            {data.map((item) => (
                <div key={item._id}
                     className="carousel-item active single_gallery_item"
                     data-wow-delay="0.2s"
                     style={{
                         visibility: "visible",
                         animationDelay: "0.2s",
                         animationName: "fadeInUpBig",
                         padding: "20px"
                     }}>
                    <div className="product-img">
                        <img className="d-block w-100" src={item.img} alt={`Slide ${item._id}`}/>
                        <div className="product-quicview">
                            <Link to="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></Link>
                        </div>
                    </div>
                    <div className="product-description">
                        <h4 className="product-price">${item.price}</h4>
                        <p>{item.name}</p>
                        <Link to="#" className="add-to-cart-btn">ADD TO CART</Link>
                    </div>
                </div>

            ))}


        </Carousel>
    );
}

export default CarouselProductImages;
