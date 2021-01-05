import styled from "styled-components";
import { Logo } from "./Image";
import { NavItem } from "./Button";
import PropTypes from "prop-types";

const StyledHeader = styled.nav`
  background: ${({ theme }) => theme.color.black};
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
`;

const Nav = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  & div {
    display: flex;
  }
  ${({ theme }) => theme.media.sm} {
    padding: ${({ theme }) => theme.space.sm}px;
  }
`;

const Brand = styled(Logo)`
  margin: 0 ${({ theme }) => theme.space.sm}px;
`;

export function Header({ isLogin }) {
  const username = "name";
  return (
    <StyledHeader>
      <Nav>
        <Brand white />
        {isLogin && (
          <div>
            <NavItem to={"/"} content={"首頁"} />
            <NavItem to={"/users"} content={"成員列表"} />
            <NavItem to={"/users"} content={"成員活動紀錄"} />
            <NavItem to={`/users/${username}`} content={"個人頁面"} />
          </div>
        )}
      </Nav>
    </StyledHeader>
  );
}
Header.propTypes = {
  isLogin: PropTypes.bool,
};
