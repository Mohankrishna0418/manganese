import React from "react";
import { useNavigate } from "react-router";
import "./enterprise.css";

const enterprise = (): React.ReactNode => {
  const navigate = useNavigate();
  return (
    <div className="enterprise">
      <h1>enterprise</h1>
      <button onClick={() => navigate("/")}>Return to home</button>
    </div>
  );
};

export default enterprise;
