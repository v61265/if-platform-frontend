import styled from "styled-components";
import { ReactComponent as Username } from "../svg/username.svg";
import { ReactComponent as Password } from "../svg/password.svg";
import { ReactComponent as Nickname } from "../svg/nickname.svg";
import { ReactComponent as From } from "../svg/from.svg";
import { ReactComponent as Time } from "../svg/time.svg";
import { ReactComponent as Email } from "../svg/email.svg";
import { ReactComponent as Contact } from "../svg/contact.svg";
import { ReactComponent as Instagram } from "../svg/instagram.svg";
import { ReactComponent as Facebook } from "../svg/facebook.svg";
import logo from "../svg/logo.svg";
import logoWhite from "../svg/logo_white.svg";
import logoBlack from "../svg/logo_black.svg";
import PropTypes from "prop-types";

const StyledLogo = styled.a`
  display: block;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
  height: 40px;
  font-size: 12px;
  background: url(${logo}) center/contain no-repeat;
  ${({ white }) =>
    white && `background: url(${logoWhite}) left/contain no-repeat;`}
  ${({ black }) =>
    black && `background: url(${logoBlack}) left/contain no-repeat;`}
`;
export function Logo({ white, black }) {
  return (
    <StyledLogo href="/" white={white} black={black}>
      <h1>想像朋友寫作會</h1>
    </StyledLogo>
  );
}
Logo.propTypes = {
  white: PropTypes.bool,
  black: PropTypes.bool,
};

export const StyledIcon = styled.div`
  display: inline-block;
  width: ${({ theme }) => theme.icon.md}px;
  height: ${({ theme }) => theme.icon.md}px;
  & svg {
    width: 100%;
    height: auto;
  }
`;
const StyledFrontIcon = styled(StyledIcon)`
  position: absolute;
  top: ${({ theme }) => theme.space.xs}px;
  left: ${({ theme }) => theme.space.sm}px;
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

export const StyledSmallIcon = styled(StyledIcon)`
  width: ${({ theme }) => theme.icon.sm}px;
  height: ${({ theme }) => theme.icon.sm}px;
`;
export function SocialIcon({ icon, link }) {
  return (
    <StyledSmallIcon as="Link" to={link}>
      {icon === "instagram" && <Instagram />}
      {icon === "facebook" && <Facebook />}
    </StyledSmallIcon>
  );
}
SocialIcon.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
};
