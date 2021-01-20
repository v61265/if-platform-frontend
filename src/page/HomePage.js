import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundPage, PageContainer, EventContainer } from "../components/Page";
import { H1, H3, H4, Hsb, Ps, Pxs } from "../components/Text";
import { Button } from "../components/Button";
import { getEvents } from '../redux/reducer/eventSlice';

const MaxPage = styled(BackgroundPage)`
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
  width: auto;
  height: auto;
  margin-right: auto;
  margin-left: auto;
`;

const EventInfo = styled.div`
  text-align: left;
  & > ${Hsb} {
    margin-bottom: 10px;
  }
  & ${Ps} {
    margin-top: 20px;
    white-space: pre-wrap;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const BlackButton = styled(Button)`
  width: initial;
  padding: 12px;
`;

const GreyButton = styled(BlackButton)`
  font-weight: bold;
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

const EventInProcess = ({ event }) => {
  let eventDate = event.time.toString().split('T')[0]
  let eventTime = event.time.toString().split('T')[1].slice(0, 5)
  let dateTime = eventDate + ' ' + eventTime
  let description = event.description;
  let descriptionText = description.split('/n').map(text => <span>{text}<br/></span>)

  return (
    <StyledEventInProcess marginBottom={24} padding={40}>
      <H1>{event.title}</H1>
      <EventPicture src={event.picture} />
      <EventInfo>
        <Hsb>活動時間 | {dateTime}</Hsb>
        <Hsb>活動地點 | {event.location}</Hsb>
        <Hsb>現場名額 | {event.presentAttendeesLimit}</Hsb>
        <Ps>
          {descriptionText}
        </Ps>
      </EventInfo>
      <ButtonWrapper>
        <BlackButton large as={Link} to={`/event-page/${event.id}`}>
          詳細內容
        </BlackButton>
      </ButtonWrapper>
    </StyledEventInProcess>
  );
};

const EventInPast = ({ title, picture, time, location, id }) => {
  let eventDate = time.toString().split('T')[0]
  let eventTime = time.toString().split('T')[1].slice(0, 5)
  let dateTime = eventDate + ' ' + eventTime
  return (
    <StyledEventInPast marginBottom={16} padding={24}>
      <H3>{title}</H3>
      <EventPicture src={picture} />
      <EventInPastInfo>
        <Pxs>{dateTime}</Pxs>
        <Pxs>{location}</Pxs>
      </EventInPastInfo>
      <ButtonWrapper>
        <GreyButton large secondary as={Link} to={`/history-event-page/${id}`}>
          活動歷史
        </GreyButton>
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
  let eventsHistory = []
  const isMobile = false;
  const dispatch = useDispatch();
  const events = useSelector(store => store.event.events)

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch]); 

  if (!events) return null

  for (let i = 0; i < events.length - 1; i++ ) {
    if (new Date(events[i].time) < new Date()) {
      eventsHistory.push(events[i])
    }
  }

  return (
    <MaxPage>
      <Wrapper>
        <EventInProcess event={events[events.length - 1]}/>
        <EventList>
        {eventsHistory.map((eventHistory) => (
          <EventInPast 
            title={eventHistory.title} 
            picture={eventHistory.picture} 
            time={eventHistory.time} 
            location={eventHistory.location} 
            id={eventHistory.id}
          />
        ))}
          <Block />
          <Block />
        </EventList>
      </Wrapper>
      {isMobile ? <MobilePagination /> : <Pagination />}
    </MaxPage>
  );
}
