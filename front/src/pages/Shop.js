import React, {useEffect} from 'react';
import Wrapper from "../components/Wrapper";
import Pagination from "../components/Pagination";
import Products from "../components/Products";
import Filters from "../components/Filters";
import Scroll from "../components/Scroll";
import {animateOnScroll} from "../untils/animateOnScroll";

function Shop(props) {

    const {data, categories, colors} = props;

    const pageCount = Math.ceil(data.length / 6);


    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
        animateOnScroll(elementsToAnimate, "fadeInUp");
    }, []);

    return (
        <Wrapper>

            <div id="wrapper">

                <section className="shop_grid_area section_padding_100">
                    <div className="container">
                        <div className="row">

                            <Filters data={data} categories={categories} colors={colors} />

                            <div className="col-12 col-md-8 col-lg-9">
                                <div className="shop_grid_product_area">
                                    <div className="row">

                                        <Products data={data}/>

                                    </div>
                                </div>


                                <Pagination pageCount={pageCount}/>

                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <Scroll/>

        </Wrapper>
    );
}

export default Shop;

