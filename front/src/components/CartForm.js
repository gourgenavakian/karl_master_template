import React, { useState } from 'react';

function CartForm() {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        setQuantity(prevQty => (prevQty > 1 ? prevQty - 1 : 1));
    };

    const handleIncrease = () => {
        setQuantity(prevQty => (prevQty < 12 ? prevQty + 1 : 12));
    };

    const handleChange = (e) => {
        const value = Math.max(1, Math.min(12, parseInt(e.target.value) || 1));
        setQuantity(value);
    };

    return (
        <form className="cart clearfix mb-50 d-flex" method="post">
            <div className="quantity">
                <span className="qty-minus" onClick={handleDecrease}>
                    <i className="fa fa-minus" aria-hidden="true"></i>
                </span>

                <input
                    type="number"
                    className="qty-text"
                    id="qty"
                    step="1"
                    min="1"
                    max="12"
                    name="quantity"
                    value={quantity}
                    onChange={handleChange}
                />

                <span className="qty-plus" onClick={handleIncrease}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </span>
            </div>

            <button type="submit" name="addtocart" value="5" className="btn cart-submit d-block">
                Add to cart
            </button>
        </form>
    );
}

export default CartForm;
