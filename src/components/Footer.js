import styled from "styled-components";
import bg from "../svg/footer_bg.svg";
import { ButtonGroup } from "./Button";
import { SocialIcon } from "./Image";

const StyledFooter = styled.footer`
  background: url(${bg}) center 78px / cover no-repeat,
    ${({ theme }) => theme.color.black};
  height: 200px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.white};
  & > div > * ~ * {
    margin-top: ${({ theme }) => theme.space.sm}px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <h5>IF 想像朋友寫作會</h5>
        <ButtonGroup>
          <SocialIcon icon={"facebook"} link={"/"} />
          <SocialIcon icon={"instagram"} link={"/"} />
        </ButtonGroup>
      </div>
    </StyledFooter>
  );
}
