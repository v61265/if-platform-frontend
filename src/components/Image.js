import styled from "styled-components";
import { ReactComponent as Username } from "../svg/username.svg";
import { ReactComponent as Password } from "../svg/password.svg";
import { ReactComponent as Nickname } from "../svg/nickname.svg";
import { ReactComponent as From } from "../svg/from.svg";
import { ReactComponent as Time } from "../svg/time.svg";
import { ReactComponent as Email } from "../svg/email.svg";
import { ReactComponent as Contact } from "../svg/contact.svg";
import logoImage from "../png/logo_image.png";
import logo from "../png/logo.png";
import logoWhite from "../png/logo_white.png";
import logoBlack from "../png/logo_black.png";
import PropTypes from "prop-types";

export const StyledLogo = styled.h1`
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
  background: url(${logo}) center/cover;
  ${({ image }) => image && `background-image: url(${logoImage});`}
  ${({ white }) => white && `background-image: url(${logoWhite});`}
  ${({ black }) => black && `background-image: url(${logoBlack});`}
`;
export function Logo({ image, white, black }) {
  console.log(image, white, black);
  return (
    <Logo image white black>
      <a href="/">想像朋友寫作會</a>
    </Logo>
  );
}
Logo.propTypes = {
  image: PropTypes.bool,
  white: PropTypes.bool,
  black: PropTypes.bool,
};

export const StyledIcon = styled.div`
  fill: ${({ theme }) => theme.color.black};
  display: inline-block;
  width: ${({ theme }) => theme.icon.md}px;
  height: ${({ theme }) => theme.icon.md}px;
  & svg {
    width: 100%;
    height: auto;
  }
  ${({ theme }) => theme.media.sm} {
    width: ${({ theme }) => theme.icon.sm}px;
    height: ${({ theme }) => theme.icon.sm}px;
  }
`;
const StyledFrontIcon = styled(StyledIcon)`
  position: absolute;
  top: ${({ theme }) => theme.space.xs + 1}px;
  left: ${({ theme }) => theme.space.sm}px;
  ${({ theme }) => theme.media.sm} {
    top: ${({ theme }) => theme.space.xs}px;
    left: ${({ theme }) => theme.space.xs}px;
  }
`;
export function FrontIcon({ icon }) {
  return (
    <StyledFrontIcon>
      {icon === "username" && <Username />}
      {icon === "password" && <Password />}
      {icon === "nickname" && <Nickname />}
      {icon === "time" && <Time />}
      {icon === "from" && <From />}
      {icon === "email" && <Email />}
      {icon === "contact" && <Contact />}
    </StyledFrontIcon>
  );
}
FrontIcon.propTypes = {
  icon: PropTypes.string,
};
