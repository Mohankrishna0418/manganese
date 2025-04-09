import React from "react";

import "./product.css";
import { useNavigate } from "react-router";
import Container from "../../components/Container";
import NavigationBar from "../../components/NavigationBar";

const product = (): React.ReactNode => {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar />
      <Container>
        <div className="product">
          <h1>Product</h1>
          <button onClick={() => navigate("/")}>Return to home</button>
        </div>
      </Container>
    </>
  );
};

export default product;
