import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import ModalPage from "./ModalPage";
import {useState} from "react";


function Products(props) {

    const {data} = props;


    const [showModal, setShowModal] = useState(false);
    const [pageController, setPageController] = useState({1: null});
    const [currentItem, setCurrentItem] = useState(null);

    const params = useParams();




    useEffect(() => {
        const calculatePages = (data) => {
            const perPage = 6;
            const pagesCount = Math.ceil(data.length / perPage);
            const pages = {};

            for (let i = 1; i <= pagesCount; i++) {
                pages[i] = data.slice((i - 1) * perPage, i * perPage);
            }
            setPageController(pages);
        };

        calculatePages(data);
    }, [data]);

    const getData = (key) => pageController[key] || pageController[1] || [];

    // console.log(pageController);
    // console.log(1, getData(1))
    // console.log(2, getData(2))
    // console.log(3, getData(params.page))

    const productOnClick = (id) => {

        const current = pageController[ Number(params.page) || 1 ].find(item => item._id === id);
        setCurrentItem(current);
        setShowModal(true);
        console.log('current', currentItem);


    }


    return (
        <>

            { showModal ? <ModalPage closeButtonOnClick={productOnClick} currentItem={currentItem}/> : null}

            {getData(Number(params.page)).map((item) => (

                    <div key={item._id}
                         className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig"
                         style={{
                             visibility: "visible",
                             animationDelay: "0.2s",
                             animationName: "fadeInUpBig"
                         }}>
                        <div className="product-img">
                            <img src={item.img}
                                 alt={`Slide ${item.id}`}/>
                            <div className="product-quicview">
                                <Link to="#" data-toggle="modal" data-target="#quickview" onClick={() => productOnClick(item._id)}><i
                                    className="ti-plus"></i></Link>
                            </div>
                        </div>
                        <div className="product-description">
                            <h4 className="product-price">${item.price}</h4>
                            <p>{item.description}</p>
                            <Link to="#" className="add-to-cart-btn">ADD TO CART</Link>
                        </div>
                    </div>

            ))}
        </>
    );
}

export default Products;

