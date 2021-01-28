import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { BackgroundPage, EventContainer } from "../components/Page";
import { Button } from "../components/Button";
import { H4, H5, Hsb, Ps } from "../components/Text";
import { Avatar } from "../components/Avatar";
import { PageTitle } from "../components/Title";
import { TextModal, CheckModal } from "../components/Modal";
import { textModalContent, checkModalContent } from "../constants/variable";
import {
  getEvent,
  getEventParticipants,
  signUpEvent,
  cancelSignUpEvent,
  checkAttend,
  checkWorkNum,
  checkPresentNum,
} from "../redux/reducer/eventSlice";
import { selectMe } from "../redux/reducer/userSlice";

const MaxPage = styled(BackgroundPage)``;

const AllWrapper = styled.div`
  margin: 0 auto;
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
  max-width: 936px;
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

const NumsInfo = styled.div``;

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
  padding: 18px 12px;
  margin: 10px;
  font-weight: bold;
  &: focus {
    background: ${({ theme }) => theme.color.primary};
  }
`;

const GreyButton = styled(PinkButton)`
  &: focus {
    background: ${({ theme }) => theme.color.greyLight};
  }
`;
const NoneButton = styled(H4)`
  padding: 18px 12px;
  margin: 10px;
`;
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
  let eventDate = event.time.toString().split("T")[0];
  let eventTime = event.time.toString().split("T")[1].slice(0, 5);
  let dateTime = eventDate + " " + eventTime;
  let description = event.description;
  let descriptionText = description.split("/n").map((text) => (
    <span>
      {text}
      <br />
    </span>
  ));

  return (
    <StyledEventInProcess marginBottom={24}>
      <EventPicture src={event.picture} />
      <EventInfo>
        <Hsb>活動時間 | {dateTime}</Hsb>
        <Hsb>活動地點 | {event.location}</Hsb>
        <Hsb>稿件篇數 | {event.workLimit}</Hsb>
        <Hsb>現場名額 | {event.presentAttendeesLimit}</Hsb>
        {event.meetingLink && (
          <Hsb>
            會議連結 |{" "}
            <a href={event.meetingLink} target="_blank">
              點我
            </a>
          </Hsb>
        )}
        {event.referance && (
          <Hsb>
            音檔連結 |{" "}
            <a href={event.referance} target="_blank">
              點我
            </a>
          </Hsb>
        )}
        <Ps>{descriptionText}</Ps>
      </EventInfo>
    </StyledEventInProcess>
  );
};

const AttendCard = ({
  participants,
  handleOpenModal,
  isAttend,
  isPresentLimit,
}) => {
  return (
    <Block>
      <NumsInfo>
        <H5>現場參加人數：{participants.present.length}</H5>
        <H5>線上參加人數：{participants.online.length}</H5>
        <H5>現場候補人數：{participants.alternative.length}</H5>
      </NumsInfo>
      {isAttend ? (
        <Buttons>
          <GreyButton
            large
            secondary
            as={Link}
            onClick={handleOpenModal}
            type={"cancelSignUpEvent"}
          >
            取消報名
          </GreyButton>
        </Buttons>
      ) : (
        <Buttons>
          {isPresentLimit ? (
            <GreyButton
              large
              secondary
              as={Link}
              onClick={handleOpenModal}
              type={"present"}
            >
              候補現場
            </GreyButton>
          ) : (
            <PinkButton
              large
              primary
              as={Link}
              onClick={handleOpenModal}
              type={"present"}
            >
              報名現場
            </PinkButton>
          )}
          <PinkButton
            large
            primary
            as={Link}
            onClick={handleOpenModal}
            type={"online"}
          >
            報名線上
          </PinkButton>
        </Buttons>
      )}
    </Block>
  );
};

const WorkCard = ({ event, isWorkLimit }) => {
  return (
    <Block>
      <NumsInfo>
        <H5>稿件篇數：{event.Works.length}</H5>
      </NumsInfo>
      <Buttons>
        <PinkButton large primary as={Link} to={`/event-work-list/${event.id}`}>
          稿件列表
        </PinkButton>
        {isWorkLimit ? (
          <NoneButton>稿件已滿</NoneButton>
        ) : (
          <PinkButton large primary as={Link} to={"/work-add-page"}>
            我要投稿
          </PinkButton>
        )}
      </Buttons>
    </Block>
  );
};

const PortraitBlock = ({ image, nickname, username }) => {
  return (
    <div>
      <Portrait image={image} />
      <NicknameTag>
        {nickname}(@{username})
      </NicknameTag>
    </div>
  );
};

const AttendeeBlock = ({ content, event, participantId }) => {
  let participants = [];
  for (let i = 0; i < event.participant.length; i++) {
    if (participantId.indexOf(Number(event.participant[i].id)) > -1) {
      participants.push(event.participant[i]);
    }
  }
  return (
    <StyledAttendeeBlock>
      <H5>{content}</H5>
      <AttedeePortraits>
        {participants.map((participant) => (
          <PortraitBlock
            image={participant.portrait}
            nickname={participant.nickname}
            username={participant.username}
          />
        ))}
      </AttedeePortraits>
    </StyledAttendeeBlock>
  );
};

const initIsModal = {
  present: false,
  online: false,
  cancelSignUpEvent: false,
  signUpEventSuccess: false,
  cancelSignUpEventSuccess: false,
};

export default function EventPage() {
  const { id } = useParams();
  const [isModal, setIsModal] = useState(initIsModal);
  const [requestType, setRequestType] = useState("");
  const dispatch = useDispatch();
  const event = useSelector((store) => store.event.event);
  const eventParticipants = useSelector(
    (store) => store.event.eventParticipants
  );
  const isAttendEvent = useSelector((store) => store.event.isAttendEvent);
  const isWorkLimit = useSelector((store) => store.event.isWorkLimit);
  const isPresentLimit = useSelector((store) => store.event.isPresentLimit);
  const getMe = useSelector(selectMe);

  useEffect(() => {
    dispatch(getEvent(id));
    dispatch(getEventParticipants(id));
  }, [id, dispatch, isAttendEvent, isWorkLimit]);

  if (!event || !eventParticipants || !getMe) return null;

  const checkIsAttend = () => {
    let participantId = event.participant.map((participant) => participant.id);
    let getMeId = getMe.id;
    if (participantId.indexOf(getMeId) > -1) {
      dispatch(checkAttend(true));
    } else {
      dispatch(checkAttend(false));
    }
  };

  const checkPresentIsLimit = () => {
    let presentLimit = event.presentAttendeesLimit;
    let presentNum = eventParticipants.present.length;
    // let presentNum = 30
    if (presentNum >= presentLimit) {
      dispatch(checkPresentNum(true));
    } else {
      dispatch(checkPresentNum(false));
    }
  };

  const checkWorkIsLimit = () => {
    let workLimit = event.workLimit;
    let workNum = event.Works.length;
    if (workNum >= workLimit) {
      dispatch(checkWorkNum(true));
    } else {
      dispatch(checkWorkNum(false));
    }
  };

  checkIsAttend();
  checkWorkIsLimit();
  checkPresentIsLimit();

  const handleSignUpEvent = () => {
    setIsModal(initIsModal);
    dispatch(signUpEvent(id, requestType)).then((res) => {
      alert(res.message);
    });
    dispatch(checkAttend(true));
  };

  const handleCancelSignUpEvent = () => {
    dispatch(cancelSignUpEvent(id)).then((res) => {
      alert(res.message);
    });
    setIsModal(initIsModal);
    dispatch(checkAttend(false));
  };

  const handleOpenModal = ({ target }) => {
    setIsModal({ ...isModal, [target.type]: true });
    setRequestType(target.type);
  };

  const handleCloseModal = () => {
    setIsModal(initIsModal);
  };

  return (
    <MaxPage>
      <AllWrapper>
        <PageTitle
          highLight={"報名"}
          title={event.title}
          color={({ theme }) => theme.color.primary}
        />
        <Wrapper>
          <Main>
            <EventInProcess event={event} />
            <AttendCard
              event={event}
              participants={eventParticipants}
              handleOpenModal={handleOpenModal}
              handleCancelSignUpEvent={handleCancelSignUpEvent}
              isAttend={isAttendEvent}
              isPresentLimit={isPresentLimit}
            />
            <WorkCard event={event} isWorkLimit={isWorkLimit} />
          </Main>
          <Sidebar>
            <AttendeeBlock
              content={"現場參加者"}
              event={event}
              participantId={eventParticipants.present}
            />
            <AttendeeBlock
              content={"線上參加者"}
              event={event}
              participantId={eventParticipants.online}
            />
            <AttendeeBlock
              content={"候補"}
              event={event}
              participantId={eventParticipants.alternative}
            />
          </Sidebar>
        </Wrapper>
      </AllWrapper>
      {Object.keys(isModal).map((modal) => {
        if (!isModal[modal]) return "";
        if (checkModalContent[modal])
          return (
            <CheckModal
              content={checkModalContent[modal]}
              handleCloseModal={handleCloseModal}
              handleConfirm={
                requestType === "cancelSignUpEvent"
                  ? handleCancelSignUpEvent
                  : handleSignUpEvent
              }
            />
          );
      })}
    </MaxPage>
  );
}
