import styled from "styled-components";
import { Logo } from "./Image";
import { NavItem } from "./Button";

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

export default function Header() {
  const username = "name";
  return (
    <Nav>
      <Navbar>
        <Logo white />
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
