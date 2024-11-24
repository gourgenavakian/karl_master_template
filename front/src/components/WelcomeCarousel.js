import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

class CarouselImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: [
                { img: 'img/bg-img/bg-1.jpg', description: 'FASHION TRENDS', button: 'SHOP NOW' },
                { img: 'img/bg-img/bg-2.jpg', description: 'SUMMER COLLECTION', button: 'CHECK COLLECTION' },
                { img: 'img/bg-img/bg-4.jpg', description: 'WOMEN FASHION', button: 'CHECK COLLECTION' },
            ],
        };
        this.wow = null;
    }

    componentDidMount() {
        this.wow = new WOW.WOW({
            live: false,
            resetAnimation: true,
        });
        this.wow.init();
    }

    handleSlideChange = () => {
        if (this.wow) {
            this.wow.sync();
        }
    };


    render() {
        const { img } = this.state;

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };

        return (
            <div className="welcome_slides">
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
                    afterChange={this.handleSlideChange}
                >
                    {img.map((item, index) => (
                        <div
                            key={index}
                            className="single_slide height-800 bg-img background-overlay"
                            style={{
                                backgroundImage: `url(${item.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100%',
                                height: '400px',
                                transition: 'transform 1s ease-in-out',
                            }}
                        >
                            <div className="container h-100">
                                <div className="row h-100 align-items-center">
                                    <div className="col-12">
                                        <div className="welcome_slide_text">
                                            <h6
                                                data-delay="0"
                                                data-duration="500ms"
                                                className="wow bounceInDown"
                                                style={{ animationDuration: '0.8s' }}
                                            >
                                                * Only today we offer free shipping
                                            </h6>
                                            <h2
                                                data-animation="fadeInUpBig wow"
                                                data-delay="500ms"
                                                data-duration="500ms"
                                                className="wow fadeInLeftBig"
                                                style={{ animationDuration: '0.9s' }}
                                            >
                                                {item.description}
                                            </h2>
                                            <Link
                                                to="#"
                                                className="btn karl-btn wow fadeInUp"
                                                style={{ animationDuration: '0.5s' }}
                                            >
                                                {item.button}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    }
}

export default CarouselImg;
