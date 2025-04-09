import React from "react";

import "./product.css";
import { useNavigate } from "react-router";

const product = ():React.ReactNode => {
    const navigate= useNavigate();
    return (
        <div className="product">
            <h1>Product</h1>
            <button onClick={() => navigate("/")}>Return to home</button>
        </div>
    );
    }

export default product;