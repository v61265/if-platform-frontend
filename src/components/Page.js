import styled from "styled-components";
import backgroundImage from "../svg/page_bg_pink.svg";
import { FlexCenter } from "./Flex";

export const Page = styled.div`
  background: ${({ theme }) => theme.color.background};
  ${FlexCenter}
  overflow: scroll;
  padding: ${({ theme }) => `${theme.space.lg}px ${theme.space.sm}px`};
  margin-top: 72px;
`;

export const MaskPage = styled.div`
  background: ${({ theme }) => theme.color.mask};
  overflow: scroll;
  ${FlexCenter}
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
