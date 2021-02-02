import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectMe, selectUser } from "../redux/reducer/userSlice";
import { addWork as addWorkAPI } from "../WebAPI";
import styled from "styled-components";
import { Page, BackgroundPage, PageContainer } from "../components/Page";
import { PageTitle } from "../components/Title";
import { QuillWrite } from "../components/TextEditor";
import { StyledPfc } from "../components/Text";
import { Button, ButtonGroup } from "../components/Button";
import {
  getEvent,
  getEventParticipants,
  signUpEvent,
  cancelSignUpEvent,
  checkAttend,
  checkWorkNum,
  checkPresentNum,
} from "../redux/reducer/eventSlice";

const MaxPage = styled(Page)``;

const Wrapper = styled.div`
  max-width: 936px;
  margin: 48px auto 24px auto;
  z-index: 1;
  & > div {
    margin-bottom: 24px;
  }
`;

const StyledSubmitPage = styled(PageContainer)`
  padding: 40px;
`;

// 先寫的元件 style，之後再看情況併入元件組

const WorkInfoWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`;

const StyledInput = styled.input`
  ${StyledPfc}
  border: 1px solid ${({ theme }) => theme.color.greyLight};
  border-radius: 10px;
  width: 100%;
  padding: ${({ theme }) => theme.space.sm}px;
`;

const StyledSelectInput = styled.select`
  border: 1px solid ${({ theme }) => theme.color.greyLight};
  border-radius: 10px;
  width: 15%;
  margin: 0 0 0 16px;
  padding: ${({ theme }) => theme.space.sm}px;
`;

const StyledHashTagInput = styled.input`
  ${StyledPfc}
  border: 1px solid ${({ theme }) => theme.color.greyLight};
  border-radius: 10px;
  margin: 24px 0;
  width: 100%;
  padding: ${({ theme }) => theme.space.sm}px;
`;

const StyledButtonGroup = styled(ButtonGroup)`
  width: 50%;
  justify-content: flex-end;
  margin: 0 0 0 auto;
`;

const categorys = [
  { name: "新詩", value: "poetry" },
  { name: "小說", value: "novel" },
  { name: "散文", value: "essay" },
  { name: "其他", value: "other" },
];

export default function SubmitWorkPage() {
  const me = useSelector(selectMe);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("poetry");
  const [paragraph, setParagraph] = useState("");
  const [paragraphDelta, setParagraphDelta] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const event = useSelector((store) => store.event.event);

  useEffect(() => {
    dispatch(getEvent(id));
  }, [id, dispatch]);

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeSelection(e) {
    setCategory(e.target.value);
  }

  function handleChangeParagraph(content, delta, source, editor) {
    setParagraph(content);
    setParagraphDelta(editor.getContents());
  }

  function handleSaveParagraph() {
    const data = {
      title: title,
      eventId: event.id,
      category: category,
      open: "1",
      anonymous: "0",
      content: paragraphDelta,
    };
    addWorkAPI(data);
  }

  function handleBack() {
    history.goBack();
  }
  return (
    <MaxPage>
      <Wrapper>
        <StyledSubmitPage marginBottom={24} padding={40}>
          <PageTitle
            highLight={"投稿"}
            title={event.title}
            color={({ theme }) => theme.color.primary}
          />
          <WorkInfoWrapper>
            <StyledInput
              value={title}
              onChange={handleChangeTitle}
              placeholder={"文章名稱"}
            />
            <StyledSelectInput onChange={handleChangeSelection}>
              {categorys.map(({ value, name }) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </StyledSelectInput>
          </WorkInfoWrapper>
          <QuillWrite
            paragraph={paragraph}
            handleChangeParagraph={handleChangeParagraph}
          />
          <StyledHashTagInput placeholder={"標籤 (以 , 號分隔)"} />
          <StyledButtonGroup horizontal>
            <Button large secondary onClick={handleBack}>
              {"返回"}
            </Button>
            <Button large primary onClick={handleSaveParagraph}>
              {"投稿"}
            </Button>
          </StyledButtonGroup>
          {/*
            生菜的其他功能可以放這裡
            */}
        </StyledSubmitPage>
      </Wrapper>
    </MaxPage>
  );
}
