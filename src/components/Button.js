import styled, { css } from "styled-components";
import { StyledIcon } from "../components/Image";
import { ReactComponent as Close } from "../svg/close.svg";
import PropTypes from "prop-types";
import { Link, useRouteMatch } from "react-router-dom";
import { StyledH4, StyledH5, StyledPxs, StyledPxxs } from "./Text";
import { FlexCenter } from "./Flex";

const HoverColor = css`
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.primaryDark};
  }
`;

export const Button = styled.button`
  ${StyledH5}
  ${({ small }) =>
    small &&
    css`
      ${StyledPxs}
      width: 85px;
    `}
  ${({ large }) =>
    large &&
    css`
      ${StyledH4}
      width: 100%;
    `}
  ${({ theme, primary, secondary }) =>
    primary
      ? `background: ${theme.color.primary};`
      : secondary
      ? `background: ${theme.color.greyLight};`
      : `
      color: ${theme.color.white};
      background: ${theme.color.black};
    `}
  border-radius: 10px;
  padding: ${({ theme }) => `${theme.space.xs}px ${theme.space.sm}px`};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.2s ease-in-out;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.color.backgroundIfLight};
  }
  &.active {
    background: ${({ theme }) => theme.color.backgroundIfDark};
  }
`;

const StyledIconButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.space.lg}px;
  right: ${({ theme }) => theme.space.lg}px;
`;
export const CloseButton = ({ handleCloseModal }) => (
  <StyledIconButton onClick={handleCloseModal}>
    <StyledIcon>
      <Close />
    </StyledIcon>
  </StyledIconButton>
);
CloseButton.propTypes = {
  handleCloseModal: PropTypes.func,
};

export const ButtonGroup = styled.div`
  ${FlexCenter}
  & > * ~ * {
    margin-left: ${({ theme, small }) =>
      small ? theme.font.xs : theme.font.sm}px;
  }
`;

export const NavButton = styled(Button)`
  ${StyledPxs}
  display: inline-block;
  box-shadow: none;
`;
export function NavItem({ to, content }) {
  const match = useRouteMatch({
    path: to,
    exact: true,
  });
  return (
    <NavButton to={to} className={match ? "active" : ""}>
      {content}
    </NavButton>
  );
}
NavItem.propTypes = {
  to: PropTypes.string,
  content: PropTypes.string,
};

export const TextLink = styled(Link)`
  transition: all 0.2s ease-in-out;
  ${HoverColor}
  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.color.greyDark};
    `}
  ${({ theme, button, primary }) =>
    button &&
    primary &&
    css`
      display: inline-block;
      padding: ${theme.space.xxs}px ${theme.font.sm}px;
      color: ${theme.color.black};
      ${StyledPxxs}
      background: ${theme.color.primaryLight};
    `}
  border-radius: 50px;
`;
