import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CartWidget = () => {
    return (
        <div className="position-relative">
            <FaShoppingCart size={24} className="text-primary" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                5
                <span className="visually-hidden">unread messages</span>
            </span>
        </div>
    );
};

export default CartWidget;
