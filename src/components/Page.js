import styled from "styled-components";

export const Page = styled.div`
  background: ${({ theme }) => theme.color.background};
  padding: ${({ theme }) => `${theme.space.xl}px 0`};
  display: flex;
  justify-content: center;
  overflow: scroll;
  flex-wrap: nowrap;
  ${({ theme }) => theme.media.sm} {
    padding: 0;
  }
`;

export const PageContainer = styled.div`
  background: ${({ theme }) => theme.color.white + "EE"};
  width: 800px;
  margin: auto 0;
  box-shadow: ${({ theme }) => theme.shadow};
  ${({ theme }) => theme.media.sm} {
    width: 100%;
  }
`;
