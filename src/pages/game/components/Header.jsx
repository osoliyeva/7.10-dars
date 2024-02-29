import styled from "styled-components";
import IconButton from "../../../general/components/IconButton";
import Health from "./Health";
import useModal from "../../../general/hooks/useModal";
import { desktop, tablet } from "../../../general/media/media";
import useGameStore from "../../../store/useGameStore";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: 40px;
  letter-spacing: -0.2px;

  ${tablet} {
    font-size: 48px;
    letter-spacing: 2.4px;
  }

  ${desktop} {
    font-size: 88px;
  }
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${tablet} {
    gap: 32px;
  }
  ${desktop} {
    gap: 57px;
  }
`;
const Header = () => {
  const { showModal } = useModal();
  const category = useGameStore(state => state.category);
  return (
    <StyledHeader>
      <StyledLeft>
        <IconButton onClick={showModal} icon={"/images/icon-menu.svg"} />
        <StyledTitle>{category}</StyledTitle>
      </StyledLeft>
      <Health />
    </StyledHeader>
  );
};

export default Header;
