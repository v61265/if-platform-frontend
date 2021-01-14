import React, { useState } from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import { Page, PageContainer, EventContainer } from "../components/Page";
import { H1, H3, H4, Hsb, Ps, Pxs } from "../components/Text";
import eventImage from "../png/event_image.png";
import pastEventImage from "../png/event_image2.png";

const MaxPage = styled(Page)`
  flex-direction: column;
  align-items: center;
  & > div {
    margin-bottom: 24px;
  }
`;

const Wrapper = styled.div`
  max-width: 936px;
  margin: 48px auto 24px auto;
  z-index: 1;
  & > div {
    margin-bottom: 24px;
  }
`;

const StyledEventInProcess = styled(EventContainer)`
  & ${H1} {
    text-align: center;
  }
`;

const EventPicture = styled.img`
  width: 100%;
  height: auto;
`;

const EventInfo = styled.div`
  text-align: left;
  & > ${Hsb} {
    margin-bottom: 10px;
  }
  & ${Ps} {
    margin-top: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: block;
  text-align: right;
`;

const Button = styled(H4)`
  padding: 12px;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  cursor: pointer;
`;

const SecondaryButton = styled(Button)`
  color: ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.greyLight};
`;

const EventList = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 18px;
  ${({ theme }) => theme.media.sm} {
    width: 325px;
  }
`;

const StyledEventInPast = styled(EventContainer)`
  flex: 1 1 300px;
`;

const EventInPastInfo = styled.div`
  padding: 0 16px;
  & ${Pxs} {
    color: ${({ theme }) => theme.color.greyDark};
  }
`;

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: ${({ theme }) => theme.space.md}px;
`;

const PaginationButton = styled(H4)`
  color: ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  padding: ${({ theme }) => theme.space.sm}px;
  margin-bottom: 12px;
  & span {
    padding: 0 ${({ theme }) => theme.space.sm}px;
  }
  cursor: pointer;
`;

const Block = styled.div`
  flex: 1 1 300px;
`;

const EventInProcess = () => {
  return (
    <StyledEventInProcess marginBottom={24} padding={40}>
      <H1>正在進行中的活動名稱</H1>
      <EventPicture src={eventImage} />
      <EventInfo>
        <Hsb>活動時間 | 2021/01/21</Hsb>
        <Hsb>活動地點 | XXX 大樹屋</Hsb>
        <Hsb>現場剩餘名額 | 0</Hsb>
        <Ps>
          培根曾經提到過，人們喜愛謊言，不僅因為害怕查明真相的艱難困苦，而且因為他們對謊言本身俱有一種自然卻腐朽的愛好。這影響了我的價值觀。泰戈爾告訴我們，昨夜的暴風雨用金色的和平為今晨加冕。這段話讓我的心境提高了一個層次。文學活動的出現，必將帶領人類走向更高的巔峰。（放不下的更多資訊用刪節號收起來）…
        </Ps>
      </EventInfo>
      <ButtonWrapper>
        <Button as={Link} to={"/event-page"}>
          詳細內容
        </Button>
      </ButtonWrapper>
    </StyledEventInProcess>
  );
};

const EventInPast = () => {
  return (
    <StyledEventInPast marginBottom={16} padding={24}>
      <H3>一件很小，很美的事情</H3>
      <EventPicture src={pastEventImage} />
      <EventInPastInfo>
        <Pxs>2021/01/21</Pxs>
        <Pxs>XXX 大樹屋</Pxs>
      </EventInPastInfo>
      <ButtonWrapper>
        <SecondaryButton as={Link} to={"/history-event-page"}>
          活動歷史
        </SecondaryButton>
      </ButtonWrapper>
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
      <Wrapper>
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
      </Wrapper>
      {isMobile ? <MobilePagination /> : <Pagination />}
    </MaxPage>
  );
}
