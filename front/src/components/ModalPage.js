import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AddCardForm from "./AddCardForm";
import axios from "axios";


class ModalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: null,
            userId: 1234567890
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.currentItem !== prevState.currentItem) {
            return { currentItem: nextProps.currentItem };
        }
        return null;
    }

    handleClick = () => {
        this.props.closeButtonOnClick();
    }

    addItemToCart = async (e, quantity) => {
        e.preventDefault();
        const { currentItem } = this.state;
        this.props.closeButtonOnClick();

        try {
            const addedItem = {
                items: [{
                    productId: currentItem._id,
                    name: currentItem.name,
                    price: Number(currentItem.price),
                    quantity: Number(quantity),
                    img: currentItem.img,
                }],
                totalQuantity: Number(quantity),
                totalPrice: Number(quantity) * Number(currentItem.price),
                userId: this.state.userId
            };

            console.log("Added Item:", addedItem);

            const res = await axios.post("http://localhost:8080/add-item-to-cart", addedItem);
            console.log("Server response:", res);

        } catch (err) {
            console.error("Error adding item to cart:", err);
        }
    };

    render() {
        const { currentItem } = this.state;

        if (!currentItem) return null;

        return (
            <div className={'fadeInDown modal wow'} id="quickview" tabIndex="-1"
                 role="dialog" aria-labelledby="quickview"
                 aria-hidden="true"
                 style={{ display: 'block', animationDuration: '0.4s' }}>
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button"
                                className="close btn"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={this.handleClick}>
                            <span aria-hidden="true">×</span>
                        </button>

                        <div className="modal-body">
                            <div className="quickview_body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-lg-5">
                                            <div className="quickview_pro_img">
                                                <img src={currentItem.img} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-7">
                                            <div className="quickview_pro_des">
                                                <h4 className="title">{currentItem.name}</h4>
                                                <div className="top_seller_product_rating mb-15">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <h5 className="price">${currentItem.price}<span>$130</span></h5>
                                                <p>{currentItem.information}</p>
                                                <Link to="/product-details">View Full Product Details</Link>
                                            </div>

                                            <AddCardForm addItemToCart={this.addItemToCart} />

                                            <div className="share_wf mt-30">
                                                <p>Share With Friend</p>
                                                <div className="_icon">
                                                    <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                                    <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                                    <Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
                                                    <Link to="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalPage;
