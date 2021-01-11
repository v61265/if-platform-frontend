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
  margin-top: 65px;
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

export const EventContainer = styled.div`
  width: 100%;
  padding: ${({ padding }) => padding}px 0;
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow};
  & > * {
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
  }
  & > h2, h3, div {
    padding: 0 ${({ padding }) => padding}px;
  }
  ${({ theme }) => theme.media.sm} {
    width: 325px;
  }
`;
