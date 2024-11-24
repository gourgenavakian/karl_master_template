import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CartForm(props) {

    const {addItemToCart} = props;

    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        setQuantity(prevQty => (prevQty > 1 ? prevQty - 1 : 1));
    };

    const handleIncrease = () => {
        setQuantity(prevQty => (prevQty < 12 ? prevQty + 1 : 12));
    };

    const handleSubmit = (e) => {
        addItemToCart(e, quantity);
    }

    return (
        <form className="cart" onSubmit={handleSubmit}>
            <div className="quantity">
                <span className="qty-minus" onClick={handleDecrease}>
                    <i className="fa fa-minus" aria-hidden="true"></i>
                </span>

                <input
                    type="number"
                    className="qty-text"
                    id="qty2"
                    step="1"
                    min="1"
                    max="12"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.min(12, parseInt(e.target.value) || 1)))}
                />

                <span className="qty-plus" onClick={handleIncrease}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </span>
            </div>
            <button type="submit" name="addtocart" value="5" className="cart-submit">Add to cart</button>

            {/* Wishlist */}
            <div className="modal_pro_wishlist">
                <Link to="wishlist.html" target="_blank">
                    <i className="ti-heart"></i>
                </Link>
            </div>

            {/* Compare */}
            <div className="modal_pro_compare">
                <Link to="compare.html" target="_blank">
                    <i className="ti-stats-up"></i>
                </Link>
            </div>
        </form>
    );
}

export default CartForm;
