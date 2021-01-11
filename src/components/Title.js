import styled from "styled-components";
import { H1 } from "./Text";

const Highlight = styled(H1)`
  display: inline-block;
  box-shadow: inset 0px -24px 0px 0px ${({ color }) => color};
`;
const Title = styled(H1)`
  display: inline-block;
`;
const StyledPageTitle = styled.div`
  margin-bottom: 24px;
  ${({ theme }) => theme.media.sm} {
    width: 325px;
    & ${Title} {
      display: block;
    }
  }
`;

export function PageTitle({ highLight, title, color }) {
  return (
    <StyledPageTitle>
      <Highlight color={color}>{highLight}</Highlight>
      <Title>{title}</Title>
    </StyledPageTitle>
  );
}
