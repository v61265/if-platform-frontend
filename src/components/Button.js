import styled from "styled-components";
import { StyledIcon } from "../components/Image";
import { ReactComponent as Close } from "../svg/close.svg";
import PropTypes from "prop-types";
import { Link, useRouteMatch } from "react-router-dom";
import { H4, XXSText } from "./Text";

const StyledLinkButton = styled.button`
  color: ${({ theme }) => theme.color.greyDark};
`;
export function LinkButton({ text }) {
  return (
    <StyledLinkButton>
      <XXSText>{text}</XXSText>
    </StyledLinkButton>
  );
}
LinkButton.propTypes = {
  text: PropTypes.string,
};

const StyledButton = styled(H4)`
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
export function Button({ text }) {
  return <StyledButton as="button">{text}</StyledButton>;
}
Button.propTypes = {
  text: PropTypes.string,
};

const StyledIconButton = styled.button`
  background: transparent;
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
      <Button className={match ? "active" : ""} text={content} />
    </StyledNavItem>
  );
}
NavItem.propTypes = {
  to: PropTypes.string,
  content: PropTypes.string,
};
