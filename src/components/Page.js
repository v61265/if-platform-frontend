import styled from "styled-components";
import backgroundImage from "../svg/page_bg_pink.svg";

export const Page = styled.div`
  background: ${({ theme }) => theme.color.background};
  display: flex;
  overflow: scroll;
  justify-content: center;
  padding: ${({ theme }) => `${theme.space.lg}px ${theme.space.sm}px`};
  margin-top: 72px;
`;

export const MaskPage = styled.div`
  background: ${({ theme }) => theme.color.mask};
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.space.lg}px 0;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
`;

export const BackgroundPage = styled(Page)`
  background-image: url(${backgroundImage});
  background-position: center 320px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const PageContainer = styled.div`
  background: ${({ theme }) => theme.color.white + "EE"};
  width: 800px;
  box-shadow: ${({ theme }) => theme.shadow};
  ${({ theme }) => theme.media.sm} {
    width: 100%;
  }
`;
