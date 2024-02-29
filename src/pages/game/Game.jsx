import styled from "styled-components";
import Container from "../../general/components/Container";
import Header from "./components/Header";
import Letters from "./components/Letters";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
import { createPortal } from "react-dom";
import useGameStore from "../../store/useGameStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { desktop, tablet } from "../../general/media/media";
import splittedPhrase from "../../general/utils/splittedPhrase";

const StyledContainer = styled(Container)`
  padding-top: 32px;

  ${tablet} {
    padding-top: 61px;
  }
  ${desktop} {
    padding-top: 80px;
  }
`;

const Game = () => {
  const phrase = useGameStore(state => state.phrase);
  const navigate = useNavigate();
  useEffect(() => {
    if (!phrase) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <StyledContainer bgBlur>
        <Header />
        <Letters />
        <Keyboard />
      </StyledContainer>
      {createPortal(<Modal />, document.body)}
    </>
  );
};

export default Game;
