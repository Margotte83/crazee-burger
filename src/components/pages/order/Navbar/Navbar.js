import styled from "styled-components";
import Logo from "../../../reusable-UI/Logo.js";
import { refreshPage } from "../../../../utils/Window.js";
import NavbarLeftSide from "./NavbarLeftSide.js";
import NavbarRightSide from "./NavbarRightSide.js";
import { theme } from "../../../../theme/index.js";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={refreshPage} />
      <NavbarLeftSide />
      <NavbarRightSide />
    </NavbarStyled>
  );
}
const NavbarStyled = styled.nav`
  background-color: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border.bottom: 1px solid ${theme.colors.greyLight};
  background-color: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  .logo-order-page {
    cursor: pointer;
  }

  .logo-order-page {
    cursor: pointer;
  }
`;
