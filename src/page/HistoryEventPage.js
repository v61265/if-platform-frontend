import React, { useEffect }from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { Page, PageContainer, EventContainer } from "../components/Page";
import { H1, H4, H5, Hsb, Ps } from "../components/Text";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { PageTitle } from "../components/Title";
import eventImage from "../png/event_image.png";
import { getEvent, getEventParticipants } from '../redux/reducer/eventSlice';

const MaxPage = styled(Page)``;

const AllWrapper = styled.div`
  padding: 0 20px;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

const Main = styled.div`
  max-width: 936px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  & > div {
    margin-bottom: 24px;
  }
  ${({ theme }) => theme.media.sm} {
    width: 325px;
    margin-right: 0px;
  }
`;

const StyledEventInProcess = styled(EventContainer)`
`;

const EventPicture = styled.img`
  width: auto;
  height: auto;
  margin-right: auto;
  margin-left: auto;
`;

const EventInfo = styled.div`
  padding: 0 40px 40px 40px;
  text-align: left;
  & > * {
    margin-bottom: 10px;
  }
  & p {
    margin-top: 20px;
  }
`;

const Block = styled(EventContainer)`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.media.sm} {
    padding: 50px 25px;
    flex-direction: column;
    justify-content: center;
    & > div:first-child {
      margin-bottom: 20px;
    }
  }
`;

const NumsInfo = styled.div`
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  ${({ theme }) => theme.media.sm} {
    justify-content: center;
    flex-wrap: nowrap;
  }
`;

const PinkButton = styled(Button)`
  width: initial;
  margin: 10px;
  padding: 18px 12px;
  font-weight: bold;
  &: focus {
    background: ${({ theme }) => theme.color.primary};
  }
`;

const GreyButton = styled(H4)`
  background: ${({ theme }) => theme.color.greyLight};
  margin: 10px;
  padding: 18px 12px;
  font-weight: bold;
  border-radius: 10px;
`

const Sidebar = styled.div`
  max-width: 300px;
  min-width: 200px;
  ${({ theme }) => theme.media.sm} {
    max-width: 325px;
    min-width: 325px;
  }
`;

const StyledAttendeeBlock = styled.div`
  width: 100%;
  padding: 25px 16px;
  background-color: ${({ theme }) => theme.color.white};
  margin-bottom: 16px;
  text-align: center;
  & ${H5} {
    margin-bottom: 15px;
  }
`;

const NicknameTag = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 5px;
  font-size: 20px;
  line-height: 30px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  transform: translate(-50%);
  display: none;
  z-index: 1;
`;

const AttedeePortraits = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & div {
    margin: 4px;
    &:hover ${NicknameTag} {
      display: block;
    }
  }
`;

const Portrait = styled(Avatar)`
  position: relative;
`;

const EventInProcess = ({ event }) => {
  let eventDate = event.time.toString().split('T')[0]
  let eventTime = event.time.toString().split('T')[1].slice(0, 5)
  let dateTime = eventDate + ' ' + eventTime
  let description = event.description;
  let descriptionText = description.split('/n').map(text => <span>{text}<br/></span>)
  
  return (
    <StyledEventInProcess marginBottom={24}>
      <EventPicture src={event.picture} />
      <EventInfo>
        <Hsb>活動時間 | {dateTime}</Hsb>
        <Hsb>活動地點 | {event.location}</Hsb>
        <Hsb>稿件篇數 | {event.workLimit}</Hsb>
        <Hsb>現場名額 | {event.presentAttendeesLimit}</Hsb>
        <Hsb>會議連結 | <a href={event.meetingLink} target="_blank">點我</a></Hsb>
        <Hsb>音檔連結 | <a href={event.referance} target="_blank">點我</a></Hsb>
        <Ps>
          {descriptionText}
        </Ps>
      </EventInfo>
    </StyledEventInProcess>
  );
};

const AttendCard = ({ participants }) => {
  return (
    <Block>
      <NumsInfo>
        <H5>現場參加人數：{participants.present.length}</H5>
        <H5>線上參加人數：{participants.online.length}</H5>
        <H5>現場候補人數：{participants.alternative.length}</H5>
      </NumsInfo>
      <Buttons>
        <GreyButton large secondary>已結束</GreyButton>
        <GreyButton large secondary>已結束</GreyButton>
      </Buttons>
    </Block>
  );
};

const WorkCard = ({ event }) => {
  return (
    <Block>
      <NumsInfo>
        <H5>稿件篇數：{event.Works.length}</H5>
      </NumsInfo>
      <Buttons>
        <PinkButton large primary as={Link} to={`/event-work-list/`}>稿件列表</PinkButton>
      </Buttons>
    </Block>
  );
};

const PortraitBlock = ({ image, nickname, username}) => {
  return (
    <div>
      <Portrait image={image} />
      <NicknameTag>{nickname}(@{username})</NicknameTag>
    </div>
  );
};

const AttendeeBlock = ({ content, event, participantId }) => {
  let participants = []
  for (let i = 0; i < event.participant.length; i++ ) {
    if (participantId.indexOf(Number(event.participant[i].id)) > -1) {
      participants.push(event.participant[i])
    }
  }
  return (
    <StyledAttendeeBlock>
      <H5>{content}</H5>
      <AttedeePortraits>
      {participants.map((participant) => (
        <PortraitBlock image={participant.portrait} nickname={participant.nickname} username={participant.username}/>
      ))}
      </AttedeePortraits>
    </StyledAttendeeBlock>
  );
};

export default function EventPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const event = useSelector(store => store.event.event)
  const eventParticipants = useSelector(store => store.event.eventParticipants)
 
  useEffect(() => {
    dispatch(getEvent(id))
    dispatch(getEventParticipants(id))
  }, [id, dispatch]); 

  if (!event || !eventParticipants) return null

  return (
    <MaxPage>
      <AllWrapper>
        <PageTitle highLight={"已結束"} title={event.title} color={({ theme }) => theme.color.grey}/>
        <Wrapper>
          <Main>
            <EventInProcess event={event}/>
            <AttendCard participants={eventParticipants}/>
            <WorkCard event={event}/>
          </Main>
          <Sidebar>
            <AttendeeBlock content={"現場參加者"} event={event} participantId={eventParticipants.present}/>
            <AttendeeBlock content={"線上參加者"} event={event} participantId={eventParticipants.online}/>
            <AttendeeBlock content={"候補"} event={event} participantId={eventParticipants.alternative}/>
          </Sidebar>
        </Wrapper>
      </AllWrapper>
    </MaxPage>
  );
}
