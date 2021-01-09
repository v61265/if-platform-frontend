import React, { useState } from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import { Page, PageContainer } from "../components/Page";
import { H1, H3, H4, Hsb, Ps, Pxs } from "../components/Text";
import eventImage from "../png/event_image.png";
import pastEventImage from "../png/event_image2.png";
import backgroundImage from "../png/background_image.png";

const MaxPage = styled(Page)`
  flex-direction: column;
  align-items: center;
  & > div {
    margin-bottom: 24px;
  }
`;

const Background = styled.img`
  position: absolute;
  top: 320px;
`;

const StyledEventInProcess = styled(PageContainer)`
  width: 936px;
  margin: 48px auto 24px auto;
  padding: 40px 0;
  text-align: center;
  z-index: 1;
  & > * {
    margin-bottom: 24px;
  }
  ${({ theme }) => theme.media.sm} {
    width: 325px;
  }
`;
const EventTitle = styled(H1)`
  padding: 0 40px;
`;
const EventPicture = styled.img`
  width: 100%;
  height: auto;
`;
const EventInfo = styled.div`
  text-align: left;
  padding: 0 40px 40px 40px;
  & > ${Hsb} {
    margin-bottom: 10px;
  }
  & ${Ps} {
    margin-top: 20px;
    margin-bottom: 24px;
  }
`;
const Button = styled(H4)`
  padding: 12px;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  float: right;
  border-radius: 10px;
  cursor: pointer;
`;

const SecondaryButton = styled(Button)`
  color: ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.greyLight};
`;

const EventList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 936px;
  z-index: 1;
  ${({ theme }) => theme.media.sm} {
    width: 325px;
  }
`;

const StyledEventInPast = styled(PageContainer)`
  width: 300px;
  padding: 24px 0;
  margin-bottom: 24px;
  position: relative;
  & > * {
    margin-bottom: 16px;
  }
  & ${H3} {
    padding: 16px;
  }
  ${({ theme }) => theme.media.sm} {
    width: 325px;
  }
`;

const EventInPastInfo = styled.div`
  padding: 0 16px;
  & ${Pxs} {
    color: ${({ theme }) => theme.color.greyDark};
  }
`;
const Block = styled.div`
  width: 300px;
`;

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.md}px;
`;
const PaginationButton = styled(H4)`
  color: ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  padding: ${({ theme }) => theme.space.sm}px;
  margin-right: 24px;
  & span {
    padding: 0 ${({ theme }) => theme.space.sm}px;
    ${({ theme }) => theme.media.sm} {
      display: none;
    }
  }
  cursor: pointer;
`;
const EventInProcess = () => {
  return (
    <StyledEventInProcess>
      <EventTitle>正在進行中的活動名稱</EventTitle>
      <EventPicture src={eventImage} />
      <EventInfo>
        <Hsb>活動時間 | 2021/01/21</Hsb>
        <Hsb>活動地點 | XXX 大樹屋</Hsb>
        <Hsb>現場剩餘名額 | 0</Hsb>
        <Ps>
          培根曾經提到過，人們喜愛謊言，不僅因為害怕查明真相的艱難困苦，而且因為他們對謊言本身俱有一種自然卻腐朽的愛好。這影響了我的價值觀。泰戈爾告訴我們，昨夜的暴風雨用金色的和平為今晨加冕。這段話讓我的心境提高了一個層次。文學活動的出現，必將帶領人類走向更高的巔峰。（放不下的更多資訊用刪節號收起來）…
        </Ps>
        <Button as={Link} to={"/event-page"}>
          詳細內容
        </Button>
      </EventInfo>
    </StyledEventInProcess>
  );
};

const EventInPast = () => {
  return (
    <StyledEventInPast>
      <H3>一件很小，很美的事情</H3>
      <EventPicture src={pastEventImage} />
      <EventInPastInfo>
        <Pxs>2021/01/21</Pxs>
        <Pxs>XXX 大樹屋</Pxs>
        <SecondaryButton as={Link} to={"/history-event-page"}>
          活動歷史
        </SecondaryButton>
      </EventInPastInfo>
    </StyledEventInPast>
  );
};

const Pagination = () => {
  return (
    <StyledPagination>
      <PaginationButton>第一頁</PaginationButton>
      <PaginationButton>上一頁</PaginationButton>
      <PaginationButton>
        <span>1</span>
      </PaginationButton>
      <PaginationButton>
        <span>2</span>
      </PaginationButton>
      <PaginationButton>
        <span>3</span>
      </PaginationButton>
      <PaginationButton>下一頁</PaginationButton>
      <PaginationButton>最末頁</PaginationButton>
    </StyledPagination>
  );
};

const MobilePagination = () => {
  return (
    <StyledPagination>
      <PaginationButton>第一頁</PaginationButton>
      <PaginationButton>上一頁</PaginationButton>
      <PaginationButton>下一頁</PaginationButton>
    </StyledPagination>
  );
};

export default function HomePage() {
  const isMobile = false;
  return (
    <MaxPage>
      <Background src={backgroundImage} alt="" />
      <EventInProcess />
      <EventList>
        <EventInPast />
        <EventInPast />
        <EventInPast />
        <EventInPast />
        <EventInPast />
        <EventInPast />
        <EventInPast />
        <EventInPast />
        <EventInPast />
        <Block />
        <Block />
      </EventList>
      {isMobile ? <MobilePagination /> : <Pagination />}
    </MaxPage>
  );
}
