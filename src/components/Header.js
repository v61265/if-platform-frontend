import styled from "styled-components";
import { Logo } from "./Image";
import { NavButton, NavItem } from "./Button";
import { Avatar } from "./Avatar";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectMe } from "../redux/reducer/userSlice";

const StyledHeader = styled.nav`
  background: ${({ theme }) => theme.color.black};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
`;

const Nav = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.font.xs}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  & .navbar-list {
    display: flex;
    align-items: center;
    & > * ~ * {
      margin-left: ${({ theme }) => theme.space.xs}px;
    }
    & :last-child {
      flex-shrink: 0;
    }
  }
  & .menu-btn,
  .menu-icon {
    display: none;
  }
  ${({ theme }) => theme.media.sm} {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    & .menu-icon {
      display: block;
      position: fixed;
      top: 12px;
      right: ${({ theme }) => theme.font.xs}px;
      padding: 22px 8px;
      cursor: pointer;
    }

    & .menu-icon .hamburger-icon {
      background-color: ${({ theme }) => theme.color.white};
      display: block;
      height: 3px;
      width: 30px;
      position: relative;
      transition: background 0.2s ease-out;
    }

    & .menu-icon .hamburger-icon:before,
    .menu-icon .hamburger-icon:after {
      background-color: ${({ theme }) => theme.color.white};
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      width: 100%;
      transition: all 0.2s ease-out;
    }

    & .menu-icon .hamburger-icon:before {
      top: 10px;
    }

    & .menu-icon .hamburger-icon:after {
      top: -10px;
    }

    & .navbar-list {
      flex-flow: column nowrap;
      max-height: 0;
      overflow: hidden;
      text-align: center;
      transition: max-height 0.2s ease-out;
      & > *:first-of-type {
        margin-top: ${({ theme }) => theme.font.xs}px;
      }
      & > * {
        margin-left: 0;
        margin-top: ${({ theme }) => theme.space.xs}px;
      }
    }

    & .menu-btn:checked ~ .navbar-list {
      max-height: 240px;
    }

    & .menu-btn:checked ~ .menu-icon .hamburger-icon {
      background: transparent;
    }

    & .menu-btn:checked ~ .menu-icon .hamburger-icon:before {
      transform: rotate(-45deg);
    }

    & .menu-btn:checked ~ .menu-icon .hamburger-icon:after {
      transform: rotate(45deg);
    }

    & .menu-btn:checked ~ .menu-icon .hamburger-icon:before,
    .menu-btn:checked ~ .menu-icon .hamburger-icon:after {
      top: 0;
    }
  }
`;

const Brand = styled(Logo)`
  min-width: 100%;
  margin: 0 ${({ theme }) => theme.space.sm}px;
`;

export function Header({ isLogin }) {
  const me = useSelector(selectMe);
  return (
    <StyledHeader>
      <Nav>
        <Brand white />
        {isLogin && (
          <>
            <input
              className={"menu-btn"}
              type={"checkbox"}
              id={"menu-btn-input"}
            />
            <label className={"menu-icon"} htmlFor={"menu-btn-input"}>
              <span className={"hamburger-icon"}></span>
            </label>
            <div className={"navbar-list"}>
              <NavItem to={"/"} content={"首頁"} />
              <NavItem to={"/users"} content={"成員列表"} />
              <NavButton>登出</NavButton>
              <Avatar to={`/users/${me.id}`} image={me.portrait} />
            </div>
          </>
        )}
      </Nav>
    </StyledHeader>
  );
}
Header.propTypes = {
  isLogin: PropTypes.bool,
};
