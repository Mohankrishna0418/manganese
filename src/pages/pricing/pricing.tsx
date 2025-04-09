import React from "react";
import { useNavigate } from "react-router";
import "./pricing.css";

const pricing = (): React.ReactNode => {
    const navigate= useNavigate();
  return (
    <div className="pricing">
      <h1>pricing</h1>
      <button onClick={() => navigate("/")}>Return to home</button>
    </div>
  );
};

export default pricing;
