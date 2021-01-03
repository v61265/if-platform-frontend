import styled from "styled-components";

export const Page = styled.div`
  background: ${({ theme }) => theme.color.background};
  display: flex;
  justify-content: center;
  overflow: scroll;
  flex-wrap: nowrap;
`;

export const PageContainer = styled.div`
  background: ${({ theme }) => theme.color.backgroundLight};
  width: 800px;
  margin: auto 0;
  ${({ theme }) => theme.media.sm} {
    width: 320px;
  }
  box-shadow: ${({ theme }) => theme.shadow};
`;
