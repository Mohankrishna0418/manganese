import React from "react";
import { useNavigate } from "react-router";
import "./enterprise.css";
import Container from "../../components/Container";
import NavigationBar from "../../components/NavigationBar";

const enterprise = (): React.ReactNode => {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar />
      <Container>
        <div className="enterprise">
          <h1>Enterprise</h1>
          <button onClick={() => navigate("/")}>Return to home</button>
        </div>
      </Container>
    </>
  );
};

export default enterprise;
