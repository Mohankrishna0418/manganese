import React from "react";
import { useNavigate } from "react-router";
import "./developer.css";
import Container from "../../components/Container";
import NavigationBar from "../../components/NavigationBar";

const developer = (): React.ReactNode => {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar />
      <Container>
        <div className="developer">
          <h1>Developer</h1>
          <button onClick={() => navigate("/")}>Return to home</button>
        </div>
      </Container>
    </>
  );
};

export default developer;
