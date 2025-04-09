import React from "react";
import { useNavigate } from "react-router";
import "./developer.css";

const developer = (): React.ReactNode => {
  const navigate= useNavigate();
  return (
    <div className="developer">
      <h1>developer</h1>
      <button onClick={() => navigate("/")}>Return to home</button>
    </div>
  );
};

export default developer;
