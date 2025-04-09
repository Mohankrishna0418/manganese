import React from "react";
import NavigationBar from "../components/NavigationBar";
import Bears from "./components/Bear/Bear";
import Container from "../components/Container";

const Home = (): React.ReactNode => {
  return (
    <>
      <NavigationBar />
      <Container>
        <Bears />
      </Container>
    </>
  );
};

export default Home;
