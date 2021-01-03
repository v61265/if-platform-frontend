import styled from "styled-components";
import { NavItem } from "../Button";
import PropTypes from "prop-types";

const Nav = styled.nav`
  background: ${({ theme }) => theme.color.black};
`;

const Navbar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    display: flex;
  }
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.font.xl}px;
  font-weight: normal;
  color: ${({ theme }) => theme.color.white};
  margin: ${({ theme }) => theme.space.sm}px;
`;
function Brand({ content }) {
  return (
    <Name>
      <a href="/">{content}</a>
    </Name>
  );
}
Brand.propTypes = {
  content: PropTypes.string,
};

export default function Header() {
  const username = "name";
  return (
    <Nav>
      <Navbar>
        <Brand content={"想像朋友寫作會"} />
        <div>
          <NavItem to={"/"} content={"首頁"} />
          <NavItem to={"/users"} content={"成員列表"} />
          <NavItem to={"/users"} content={"成員活動紀錄"} />
          <NavItem to={`/users/${username}`} content={"個人頁面"} />
        </div>
      </Navbar>
    </Nav>
  );
}
