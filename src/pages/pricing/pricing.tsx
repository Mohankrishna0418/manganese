import React from "react";
import { useNavigate } from "react-router";
import "./pricing.css";
import Container from "../../components/Container";
import NavigationBar from "../../components/NavigationBar";

const pricing = (): React.ReactNode => {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar />
      <Container>
        <div className="pricing">
          <h1>Pricing</h1>
          <button onClick={() => navigate("/")}>Return to home</button>
        </div>
      </Container>
    </>
  );
};

export default pricing;
