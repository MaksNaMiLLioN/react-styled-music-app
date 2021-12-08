import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Column,
  MainHeading,
  Row,
  TextWrapper,
} from "../../globalStyles";
import { BiPlayCircle } from "react-icons/bi";
import { HeroSection, ButtonContainer } from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection id="hero">
      <Row justify="center" align="center" height="100%" padding="2rem">
        <Column align="center" mb="10%">
          <MainHeading>Every Creative Music</MainHeading>
          <TextWrapper
            color="white"
            size="clamp(1rem,2vw,1.3rem)"
            lineHeight="1.1rem"
            maxWidth="480px"
            align="center"
          >
            Discover, stream and share a constantly expending mix of music from
            emerging and major artists around the world
          </TextWrapper>
          <ButtonContainer>
            <Link to="sign-up">
              <Button big fontBig>
                Get Started
              </Button>
            </Link>
            <Button big fontBig>
              <BiPlayCircle size="2.3rem"></BiPlayCircle>
            </Button>
          </ButtonContainer>
        </Column>
      </Row>
    </HeroSection>
  );
};

export default Hero;
