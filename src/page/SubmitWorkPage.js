import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addWork as addWorkAPI, getWork as getWorkAPI } from "../WebAPI";
import styled from "styled-components";
import { BackgroundPage, PageContainer } from "../components/Page";
import { PageTitle } from "../components/Title";
import { QuillWrite } from "../components/TextEditor";
import { StyledPfc } from "../components/Text";
import { Button, ButtonGroup } from "../components/Button";
import { getEvent } from "../redux/reducer/eventSlice";

const MaxPage = styled(BackgroundPage)``;

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
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("poetry");
  const [paragraph, setParagraph] = useState("");
  const [paragraphDelta, setParagraphDelta] = useState("");
  const history = useHistory();
  const { id } = useParams();
  const { workid } = useParams();
  const dispatch = useDispatch();
  const event = useSelector((store) => store.event.event);

  async function getWork(id) {
    if (workid !== undefined) {
      const data = await getWorkAPI(id);
      console.log(data);
      setTitle(data.works.title);
      setCategory(data.works.category);
      setParagraph(data.works.content);
    }
    return null;
  }

  useEffect(() => {
    dispatch(getEvent(id));
  }, [id, dispatch]);

  useEffect(() => {
    getWork(workid);
  }, []);

  if (!event) return null;

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
    if (!title.trim()) {
      return alert("記得寫文章標題喔！");
    }
    const data = {
      title: title,
      eventId: event.id,
      category: category,
      open: "1",
      anonymous: "0",
      content: paragraphDelta,
    };
    addWorkAPI(data);
    alert("新增稿件成功！");
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
            <StyledSelectInput
              value={category}
              defaultValue={category}
              onChange={handleChangeSelection}
            >
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
            {workid ? (
              <Button large primary onClick={handleSaveParagraph}>
                更新
              </Button>
            ) : (
              <Button large primary onClick={handleSaveParagraph}>
                投稿
              </Button>
            )}
          </StyledButtonGroup>
          {/*
            生菜的其他功能可以放這裡
            */}
        </StyledSubmitPage>
      </Wrapper>
    </MaxPage>
  );
}
