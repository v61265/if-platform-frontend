import styled from "styled-components";
import { IconDiv } from "../components/Image";
import { ReactComponent as Close } from "../Icon/close.svg";
import PropTypes from "prop-types";
import { Link, useRouteMatch } from "react-router-dom";

export const LinkButton = styled.button`
  display: block;
  background: transparent;
  margin-right: auto;
  margin-left: auto;
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.sm}px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  font-size: ${({ theme }) => theme.font.md}px;
  border-radius: 10px;
  padding: ${({ theme }) => theme.space.sm}px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease-in-out;
  ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.font.sm}px;
  }
  &:hover,
  &.active,
  &:focus {
    background: ${({ theme }) => theme.color.secondary};
  }
`;

const ButtonDiv = styled.button`
  background: transparent;
  position: absolute;
  top: ${({ theme }) => theme.space.lg}px;
  right: ${({ theme }) => theme.space.lg}px;
`;
export function CloseButton({ handleCloseModal }) {
  return (
    <ButtonDiv onClick={handleCloseModal}>
      <IconDiv>
        <Close />
      </IconDiv>
    </ButtonDiv>
  );
}
CloseButton.propTypes = {
  handleCloseModal: PropTypes.func,
};

const NavItemWrapper = styled(Link)`
  display: inline-block;
  margin: ${({ theme }) => theme.space.sm}px;
  & button {
    box-shadow: none;
  }
`;
export function NavItem({ to, content }) {
  const match = useRouteMatch({
    path: to,
    exact: true,
  });
  return (
    <NavItemWrapper to={to}>
      <Button className={match ? "active" : ""}>{content}</Button>
    </NavItemWrapper>
  );
}
NavItem.propTypes = {
  to: PropTypes.string,
  content: PropTypes.string,
};
