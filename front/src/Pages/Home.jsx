import React from "react";
import styled from "styled-components/macro";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <Wrapper>
      <Navigation />
      <Content>
        <div className="row">
          <div className="col-4 col-sm left-part">
            <img src="./img/portrait-chef.png" className="img-fluid" alt="portrait du chef" />
          </div>
          <div className="col-8 col-sm right-part">
            <img src="./img/logoTexte.png" alt="logo" />
            <h2>
              Une expérience gastronomique,
              <br /> à travers une cuisine sans artifice.
            </h2>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  background-image: url("./img/BackgroundHome.png");
  background-size: cover;

  .left-part {
    height: 60vh;

    img {
      position: absolute;
      width: 40vh;
      bottom: 0;
      transform: translateX(-50%);
    }
  }

  .right-part {
    margin-top: 50px;
  }
`;

export default Home;
