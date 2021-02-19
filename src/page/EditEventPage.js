import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { editEvent, getEvent } from "../redux/reducer/eventSlice";
import { BackgroundPage, PageContainer } from "../components/Page";
import { H1, HighLight, Hsc, AlertText } from "../components/Text";
import { Button } from "../components/Button";
import { CheckModal } from "../components/Modal";
import { checkModalContent } from "../constants/variable";
import { selectMe } from "../redux/reducer/userSlice";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 936px;
  width: 100%;
  & > * ~ * {
    margin-left: ${({ theme }) => theme.font.xs}px;
    ${({ theme }) => theme.media.sm} {
      margin-left: 0;
      margin-top: ${({ theme }) => theme.font.xs}px;
    }
  }
  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

const MdPageContainer = styled(PageContainer)`
  width: 100%;
  padding: ${({ theme }) => theme.space.md}px;
  & > * ~ * {
    margin-top: ${({ theme }) => theme.space.md}px;
  }
  ${({ theme }) => theme.media.sm} {
    width: 325px;
  }
`;

const AddForm = styled.div`
  & > * ~ * {
    margin-top: 16px;
  }
`;

const StyledInputBlock = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  & span {
    color: ${({ theme }) => theme.color.alert};
  }
  & > ${Hsc} {
    margin-right: 8px;
    margin-bottom: 8px;
    flex: 0 1 auto;
  }
  & > input,
  textarea {
    flex: 1 1 auto;
    padding: 10px;
    height: 52px;
    border-radius: 10px;
    border: solid 1px ${({ theme }) => theme.color.grey};
  }
  & > textarea {
    height: initial;
    background: inherit;
    &:focus {
      outline: none;
    }
  }
`;

const Inline = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    flex: 1 1 auto;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  & > * {
    margin: ${({ theme }) => theme.space.sm}px;
    padding: 12px;
    width: auto;
    font-weight: bold;
  }
  ${({ theme }) => theme.media.sm} {
    justify-content: center;
  }
`;

const InputBlock = ({
  content,
  inputId,
  inputType,
  textarea,
  value,
  onChange,
  required,
}) => {
  return (
    <StyledInputBlock>
      <Hsc>
        <label htmlFor={inputId}>
          {content}
          {required && <span>*</span>}
        </label>
      </Hsc>
      {textarea ? (
        <textarea id={inputId} rows="10" value={value} onChange={onChange} />
      ) : (
        <input
          id={inputId}
          type={inputType}
          value={value}
          min="1"
          onChange={onChange}
        />
      )}
    </StyledInputBlock>
  );
};

const initIsModal = {
  handleEditEvent: false,
};

export default function AddEventPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const me = useSelector(selectMe);
  const { id } = useParams();
  const event = useSelector((store) => store.event.event);

  const eventTimes = [event.time, event.openWorksTime];
  const transferTimes = [];
  eventTimes.map((eventTime) => {
    let year = new Date(eventTime).getFullYear();
    let month = ("0" + (new Date(eventTime).getMonth() + 1)).slice(-2);
    let date = ("0" + new Date(eventTime).getDate()).slice(-2);
    let hour = ("0" + new Date(eventTime).getHours()).slice(-2);
    let minute = ("0" + new Date(eventTime).getMinutes()).slice(-2);
    eventTime = `${year}-${month}-${date}T${hour}:${minute}`;
    transferTimes.push(eventTime);
  });

  const [title, setTitle] = useState(event.title);
  const [isoTime, setIsoTime] = useState(transferTimes[0]);
  const [isoOpenWorksTime, setIsoOpenWorksTime] = useState(transferTimes[1]);
  const [location, setLocation] = useState(event.location);
  const [workLimit, setWorkLimit] = useState(event.workLimit);
  const [presentAttendeesLimit, setPresentAttendeesLimit] = useState(
    event.presentAttendeesLimit
  );
  const [meetingLink, setMeetingLink] = useState(event.meetingLink);
  const [reference, setReference] = useState(event.reference);
  const [picture, setPicture] = useState(event.picture);
  const [description, setDescription] = useState(event.description);
  const [errorMessage, setErrorMessage] = useState();
  const [isModal, setIsModal] = useState(initIsModal);

  if (!me || me.role !== "admin") {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getEvent(id));
  }, [id, dispatch]);

  const time = new Date(isoTime).toISOString();
  const openWorksTime = new Date(isoOpenWorksTime).toISOString();

  const handleSubmit = () => {
    setErrorMessage(null);
    if (
      !title ||
      !isoTime ||
      !isoOpenWorksTime ||
      !location ||
      !presentAttendeesLimit ||
      !workLimit
    ) {
      setErrorMessage("有東西漏填囉");
    } else {
      handleOpenModal("handleEditEvent");
    }
  };

  const handleEditEvent = () => {
    dispatch(
      editEvent(id, {
        title,
        presentAttendeesLimit,
        workLimit,
        time,
        openWorksTime,
        location,
        meetingLink,
        reference,
        description,
        picture,
      })
    ).then((res) => {
      setIsModal(initIsModal);
      history.push(`/event-page/${id}`);
    });
  };

  const handleOpenModal = (target) => {
    setIsModal({ ...isModal, [target]: true });
  };

  const handleCloseModal = () => {
    setIsModal(initIsModal);
  };

  return (
    <BackgroundPage>
      <Wrapper>
        <MdPageContainer>
          <H1>
            <HighLight>編輯活動</HighLight>
          </H1>
          <AddForm>
            <AlertText>* 必填</AlertText>
            <InputBlock
              content={"活動名稱"}
              inputId={"title"}
              inputType={"text"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Inline>
              <InputBlock
                content={"活動時間"}
                inputId={"time"}
                inputType={"datetime-local"}
                value={isoTime}
                onChange={(e) => setIsoTime(e.target.value)}
                required
              />
              <InputBlock
                content={"稿件釋出"}
                inputId={"openWorksTime"}
                inputType={"datetime-local"}
                value={isoOpenWorksTime}
                onChange={(e) => setIsoOpenWorksTime(e.target.value)}
                required
              />
            </Inline>
            <InputBlock
              content={"活動地點"}
              inputId={"location"}
              inputType={"text"}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <Inline>
              <InputBlock
                content={"稿件篇數"}
                inputId={"workLimit"}
                inputType={"number"}
                value={workLimit}
                onChange={(e) => setWorkLimit(e.target.value)}
                required
              />
              <InputBlock
                content={"現場名額"}
                inputId={"presentAttendeesLimit"}
                inputType={"number"}
                value={presentAttendeesLimit}
                onChange={(e) => setPresentAttendeesLimit(e.target.value)}
                required
              />
            </Inline>
            <InputBlock
              content={"會議連結"}
              inputId={"meetingLink"}
              inputType={"text"}
              value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
            />
            <InputBlock
              content={"音檔連結"}
              inputId={"reference"}
              inputType={"text"}
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
            <InputBlock
              content={"圖片連結"}
              inputId={"picture"}
              inputType={"text"}
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
            />
            <InputBlock
              textarea
              content={"其他說明"}
              inputId={"description"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errorMessage && <AlertText>{errorMessage}</AlertText>}
            <Buttons>
              <Button secondary large as={Link} to={"/"}>
                返回首頁
              </Button>
              <Button primary large onClick={handleSubmit}>
                確認編輯
              </Button>
            </Buttons>
          </AddForm>
        </MdPageContainer>
        {Object.keys(isModal).map((modal) => {
          if (!isModal[modal]) return "";
          if (checkModalContent[modal])
            return (
              <CheckModal
                content={checkModalContent[modal]}
                handleCloseModal={handleCloseModal}
                handleConfirm={modal === "handleEditEvent" && handleEditEvent}
              />
            );
        })}
      </Wrapper>
    </BackgroundPage>
  );
}
