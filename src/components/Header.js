import styled from "styled-components";
import { Logo } from "./Image";
import { NavItem } from "./Button";
import { Avatar } from "./Avatar";
import PropTypes from "prop-types";
import { Fragment } from "react";

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
  padding: 0 16px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  & div {
    display: flex;
  }
  & img {
    align-self: center;
  }
  & .menu-btn,
  .menu-icon {
    display: none;
  }
  @media (max-width: 540px) {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    height: auto;

    & a {
      margin: 8px 0;
    }

    & .menu-icon {
      display: block;
      position: fixed;
      top: 0;
      right: 16px;
      margin: 5px 0;
      padding: 22px 8px;
      cursor: pointer;
    }

    & .menu-icon .hamburger-icon {
      background-color: white;
      display: block;
      height: 3px;
      width: 30px;
      position: relative;
      transition: background 0.2s ease-out;
    }

    & .menu-icon .hamburger-icon:before,
    .menu-icon .hamburger-icon:after {
      background-color: white;
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
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      max-height: 0;
      overflow: hidden;
      text-align: center;
      transition: max-height 0.2s ease-out;
    }

    & .menu-btn:checked ~ .navbar-list {
      max-height: 240px;
      padding-bottom: 20px;
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
  const username = "name";
  return (
    <StyledHeader>
      <Nav className={"nav-group"}>
        <Brand white />
        {isLogin && (
          <Fragment>
            <input
              className={"menu-btn"}
              type={"checkbox"}
              id={"menu-btn-input"}
            />
            <label className={"menu-icon"} for={"menu-btn-input"}>
              <span className={"hamburger-icon"}></span>
            </label>

            <div className={"navbar-list"}>
              <NavItem to={"/users"} content={"成員列表"} />
              <NavItem to={"/users"} content={"成員活動紀錄"} />
              <Avatar
                to={`/users/${username}`}
                image={"https://i.imgur.com/sW6aO14.png"}
              />
            </div>
          </Fragment>
        )}
      </Nav>
    </StyledHeader>
  );
}
Header.propTypes = {
  isLogin: PropTypes.bool,
};
