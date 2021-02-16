import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  BackgroundPage,
  PageContainer,
  EventContainer,
} from "../components/Page";
import { PageTitle } from "../components/Title";
import { H1, H3, H4, Hsb, Ps, Pxs } from "../components/Text";
import { Button } from "../components/Button";
import { Pagination } from "../components/Pagination";
import { getEvents, getEventsByPage } from "../redux/reducer/eventSlice";
import eventImage from "../png/event_image.png";

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

const Block = styled.div`
  flex: 1 1 300px;
`;

const EventInProcess = ({ event }) => {
  let time = event.time
  let year = new Date(time).getFullYear();
  let month = ("0" + (new Date(time).getMonth() + 1)).slice(-2);
  let date = ("0" + new Date(time).getDate()).slice(-2);
  let hour = ("0" + new Date(time).getHours()).slice(-2);
  let minute = ("0" + new Date(time).getMinutes()).slice(-2);
  let dateTime = `${year}-${month}-${date} ${hour}:${minute}`;
  let description = event.description;
  let descriptionText = description.split("/n").map((text) => (
    <span>
      {text}
      <br />
    </span>
  ));

  return (
    <StyledEventInProcess marginBottom={24} padding={40}>
      <H1>{event.title}</H1>
      <EventPicture src={event.picture} />
      <EventInfo>
        <Hsb>活動時間 | {dateTime}</Hsb>
        <Hsb>活動地點 | {event.location}</Hsb>
        <Hsb>現場名額 | {event.presentAttendeesLimit}</Hsb>
        <Ps>{descriptionText}</Ps>
      </EventInfo>
      <ButtonWrapper>
        <BlackButton large as={Link} to={`/event-page/${event.id}`}>
          詳細內容
        </BlackButton>
      </ButtonWrapper>
    </StyledEventInProcess>
  );
};

const EventInPast = ({ title, picture, time, location, id, buttonValue, inProgress }) => {
  let year = new Date(time).getFullYear();
  let month = ("0" + (new Date(time).getMonth() + 1)).slice(-2);
  let date = ("0" + new Date(time).getDate()).slice(-2);
  let hour = ("0" + new Date(time).getHours()).slice(-2);
  let minute = ("0" + new Date(time).getMinutes()).slice(-2);
  let dateTime = `${year}-${month}-${date} ${hour}:${minute}`;
  return (
    <StyledEventInPast marginBottom={16} padding={24}>
      <H3>{title}</H3>
      <EventPicture src={picture} />
      <EventInPastInfo>
        <Pxs>{dateTime}</Pxs>
        <Pxs>{location}</Pxs>
      </EventInPastInfo>
      <ButtonWrapper>
        <GreyButton large secondary as={Link} to={inProgress ? `/event-page/${id}` : `/history-event-page/${id}`}>
          {buttonValue}
        </GreyButton>
      </ButtonWrapper>
    </StyledEventInPast>
  );
};

const EventDefault = () => {
  return (
    <StyledEventInProcess marginBottom={24} padding={40}>
      <H1>{"暫無活動"}</H1>
      <EventPicture src={eventImage} />
    </StyledEventInProcess>
  );
};

export default function HomePage() {
  let itemsPerPage = 9;
  let eventsInProcess = [];
  let eventsHistory = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemIndex, setItemIndex] = useState({ start: 0, end: itemsPerPage });
  const dispatch = useDispatch();
  const events = useSelector((store) => store.event.events);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  if (!events) return null;

  for (let i = 0; i < events.length; i++) {
    if (new Date(events[i].time) < new Date()) {
      eventsHistory.push(events[i]);
    } else {
      eventsInProcess.push(events[i]);
    }
  }

  // pagination
  let totalEvents = eventsHistory.length;
  let totalPages = Math.ceil(totalEvents / itemsPerPage);

  const handleClick = (pageContent) => {
    switch (pageContent) {
      case "first":
        setCurrentPage(1);
        setItemIndex({ start: 0, end: itemsPerPage });
        break;
      case "last":
        setCurrentPage(totalPages);
        setItemIndex({ start: totalEvents - 1, end: totalEvents + 1 });
        break;
      case "prev":
        setCurrentPage(currentPage - 1);
        setItemIndex({
          start: itemIndex.start - itemsPerPage,
          end: itemIndex.end - itemsPerPage,
        });
        break;
      case "next":
        setCurrentPage(currentPage + 1);
        setItemIndex({
          start: itemIndex.start + itemsPerPage,
          end: itemIndex.end + itemsPerPage,
        });
        break;
      default:
        setCurrentPage(pageContent);
        setItemIndex({
          start: itemsPerPage * (pageContent - 1),
          end: itemsPerPage * (pageContent - 1) + itemsPerPage,
        });
    }
  };

  return (
    <MaxPage>
      <Wrapper>
        <PageTitle
          highLight={"現正"}
          title={"進行中的活動"}
          color={({ theme }) => theme.color.primary}
        />
        {eventsInProcess.length >= 1 ? (
          <EventInProcess event={eventsInProcess[0]} />
        ) : (
          <EventDefault />
        )}
        {eventsInProcess.length >= 1 && (
          <EventList>
            {eventsInProcess.slice(1).map((eventInProcess) => (
              <EventInPast
                title={eventInProcess.title}
                picture={eventInProcess.picture}
                time={eventInProcess.time}
                location={eventInProcess.location}
                id={eventInProcess.id}
                buttonValue={"詳細資訊"}
                inProgress
              />
            ))}
            <Block />
            <Block />
          </EventList>
        )}
        <PageTitle
          highLight={"已結束"}
          title={"的歷史活動"}
          color={({ theme }) => theme.color.grey}
        />
        <EventList>
          {eventsHistory
            .slice(itemIndex.start, itemIndex.end)
            .map((eventHistory) => (
              <EventInPast
                title={eventHistory.title}
                picture={eventHistory.picture}
                time={eventHistory.time}
                location={eventHistory.location}
                id={eventHistory.id}
                buttonValue={"歷史活動"}
              />
            ))}
          <Block />
          <Block />
        </EventList>
      </Wrapper>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleClick={handleClick}
      />
    </MaxPage>
  );
}
