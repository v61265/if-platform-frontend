import styled from "styled-components";
import { ReactComponent as Username } from "../Icon/username.svg";
import { ReactComponent as Password } from "../Icon/password.svg";
import { ReactComponent as Nickname } from "../Icon/nickname.svg";
import { ReactComponent as From } from "../Icon/from.svg";
import { ReactComponent as Time } from "../Icon/time.svg";
import { ReactComponent as Email } from "../Icon/email.svg";
import { ReactComponent as Contact } from "../Icon/contact.svg";
import logo from "../Image/logo.png";
import PropTypes from "prop-types";

export const Logo = styled.h1`
  background: url(${logo}) center/cover;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
`;

export const IconDiv = styled.div`
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

const FrontIconDiv = styled(IconDiv)`
  fill: ${({ theme }) => theme.color.secondary};
  position: absolute;
  top: ${({ theme }) => theme.space.sm + 1}px;
  left: ${({ theme }) => theme.space.sm}px;
  ${({ theme }) => theme.media.sm} {
    top: ${({ theme }) => theme.space.xs}px;
    left: ${({ theme }) => theme.space.xs}px;
  }
`;
export function FrontIcon({ icon }) {
  return (
    <FrontIconDiv>
      {icon === "username" && <Username />}
      {icon === "password" && <Password />}
      {icon === "nickname" && <Nickname />}
      {icon === "time" && <Time />}
      {icon === "from" && <From />}
      {icon === "email" && <Email />}
      {icon === "contact" && <Contact />}
    </FrontIconDiv>
  );
}
FrontIcon.propTypes = {
  icon: PropTypes.string,
};
