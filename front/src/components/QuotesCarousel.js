import React, {Component} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


class QuotesCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {"quote": "Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis.",
                    "img": "img/bg-img/tes-1.jpg",
                    "name": "Michelle Williams",
                    "statusAndCity": "Client, Los Angeles"
                },

                {"quote": "Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis.",
                    "img": "img/bg-img/tes-1.jpg",
                    "name": "Michelle Williams",
                    "statusAndCity": "Client, Los Angeles"
                },

                {"quote": "Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis.",
                    "img": "img/bg-img/tes-1.jpg",
                    "name": "Michelle Williams",
                    "statusAndCity": "Client, Los Angeles"
                }
            ]
        }
    }

    render() {

        const {data} = this.state;

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

            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <div className="karl-testimonials-slides owl-carousel">
                        <Carousel responsive={responsive}
                                  infinite={true}
                                  autoPlay={true}
                                  autoPlaySpeed={2000}
                                  showDots={false}
                                  arrows={false}
                                  swipeable={true}
                                  draggable={true}>
                            {data.map((item, index) => (
                                <div key={index} className="single-testimonial-area text-center">
                                    <span className="quote">"</span>
                                    <h6>{item.quote}</h6>
                                    <div
                                        className="testimonial-info d-flex align-items-center justify-content-center">
                                        <div className="tes-thumbnail">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className="testi-data">
                                            <p>{item.name}</p>
                                            <span>{item.statusAndCity}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>

        );
    }
}

export default QuotesCarousel;