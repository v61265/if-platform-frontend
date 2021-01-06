import styled from "styled-components";
import { StyledIcon } from "../components/Image";
import { ReactComponent as Close } from "../svg/close.svg";
import PropTypes from "prop-types";
import { Link, useRouteMatch } from "react-router-dom";
import { H4, Pxs, Pxxs } from "./Text";

const StyledLinkButton = styled(Pxxs)`
  color: ${({ theme }) => theme.color.greyDark};
`;
export function LinkButton({ text, value, handleOpenModal }) {
  return (
    <StyledLinkButton as="button" value={value} onClick={handleOpenModal}>
      {text}
    </StyledLinkButton>
  );
}
LinkButton.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  handleOpenModal: PropTypes.func,
};

const StyledButton = styled(H4)`
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
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

const StyledNavButton = styled(Pxs)`
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  min-width: 80px;
  border-radius: 10px;
  padding: 7px 5px;
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

export function Button({ text, value, handleOnClick }) {
  return (
    <StyledButton as="button" value={value} onClick={handleOnClick}>
      {text}
    </StyledButton>
  );
}
Button.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  handleOnClick: PropTypes.func,
};

export function NavButton({ text, value, handleOnClick }) {
  return (
    <StyledNavButton as="button" value={value} onClick={handleOnClick}>
      {text}
    </StyledNavButton>
  );
}
NavButton.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  handleOnClick: PropTypes.func,
};

const StyledIconButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.space.lg}px;
  right: ${({ theme }) => theme.space.lg}px;
`;
export function CloseButton({ handleCloseModal }) {
  return (
    <StyledIconButton onClick={handleCloseModal}>
      <StyledIcon>
        <Close />
      </StyledIcon>
    </StyledIconButton>
  );
}
CloseButton.propTypes = {
  handleCloseModal: PropTypes.func,
};

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * ~ * {
    margin-left: ${({ theme }) => theme.space.sm}px;
  }
`;

const StyledNavItem = styled(Link)`
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
    <StyledNavItem to={to}>
      <NavButton className={match ? "active" : ""} text={content} />
    </StyledNavItem>
  );
}
NavItem.propTypes = {
  to: PropTypes.string,
  content: PropTypes.string,
};
