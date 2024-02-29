import styled from "styled-components";
import useGameStore from "../../../store/useGameStore";
import { useEffect } from "react";
import { desktop, tablet } from "../../../general/media/media";

const StyledKeyboard = styled.div`
  margin-top: 118px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  column-gap: 8px;
  row-gap: 24px;
  padding-bottom: 24px;

  ${tablet} {
    margin-top: 134px;
    column-gap: 16px;
  }

  ${desktop} {
    margin-top: 120px;
    gap: 24px;
  }
`;

const Key = styled.button`
  color: ${props => props.theme.colors.navy};

  font-size: 24px;
  border-radius: 8px;
  background: white;
  border: none;

  line-height: 150%; /* 36px */
  letter-spacing: -0.48px;
  text-transform: uppercase;

  padding: 10px;
  cursor: pointer;

  &:active {
    background: ${props => props.theme.colors.blue};
    color: white;
  }
  &:disabled {
    opacity: 0.25;
  }

  ${tablet} {
    font-size: 48px;
    border-radius: 24px;
  }
`;

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard = () => {
  const pressedKeys = useGameStore(state => state.pressedKeys);
  const gameStatus = useGameStore(state => state.gameStatus);
  const setPressedKey = useGameStore(state => state.setPressedKey);

  const handleKey = letter => {
    if (gameStatus === "playing") {
      setPressedKey(letter);
    }
  };

  useEffect(() => {
    const keyPress = e => {
      const lowerKey = e.key.toLowerCase();
      if (alphabet.includes(lowerKey) && !pressedKeys.includes(lowerKey)) {
        handleKey(lowerKey);
      }
    };

    document.addEventListener("keyup", keyPress);

    return () => {
      document.removeEventListener("keyup", keyPress);
    };
  }, []);

  return (
    <StyledKeyboard>
      {alphabet.map(letter => (
        <Key
          disabled={pressedKeys.includes(letter)}
          onClick={() => handleKey(letter)}
          key={letter}
        >
          {letter}
        </Key>
      ))}
    </StyledKeyboard>
  );
};

export default Keyboard;
