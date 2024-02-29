import styled from "styled-components";
import useGameStore from "../../../store/useGameStore";
import { desktop, tablet } from "../../../general/media/media";

const StyledHealth = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & > img {
    width: 26px;
  }

  ${tablet} {
    gap: 40px;
    & > img {
      width: 53px;
    }
  }
`;

const StyledHealthContainer = styled.div`
  border-radius: 96px;
  width: 57px;
  padding: 4px;
  height: 16px;
  background: ${props => props.theme.colors.white};

  ${tablet} {
    width: 160px;
    height: 31px;
    padding: 9px 11px;
  }

  ${desktop} {
    width: 240px;
  }
`;
const StyledHealthBar = styled.div`
  width: ${props => (100 * props.$health) / 8}%;
  height: 100%;
  background: ${props => props.theme.colors.navy};
  border-radius: inherit;
`;

const Health = () => {
  const health = useGameStore(state => state.health);

  return (
    <StyledHealth>
      <StyledHealthContainer>
        <StyledHealthBar $health={health}></StyledHealthBar>
      </StyledHealthContainer>
      <img src="/images/icon-heart.svg" alt="" />
    </StyledHealth>
  );
};

export default Health;
