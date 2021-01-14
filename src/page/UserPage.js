import styled from "styled-components";
import { BackgroundPage, PageContainer } from "../components/Page";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectMe, selectUser } from "../redux/reducer/userSlice";
import { useEffect } from "react";
import { H1, H4, H5, LightText, Ps, HighLight, Pxs } from "../components/Text";
import { Avatar } from "../components/Avatar";
import { ButtonGroup, Button } from "../components/Button";
import { WorkListItem } from "../components/ListItem";

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

const SidebarWrapper = styled.div`
  & > * ~ * {
    margin-top: ${({ theme }) => theme.font.xs}px;
  }
`;

const SmPageContainer = styled(PageContainer)`
  width: 300px;
  padding: ${({ theme }) => theme.space.md}px;
  & .text-center {
    text-align: center;
  }
  & > * ~ * {
    margin-top: ${({ theme }) => theme.font.xs}px;
  }
`;

const Card = styled(SmPageContainer)`
  position: relative;
  margin-top: ${({ theme }) => theme.space.xxxxl / 2}px;
  padding-top: ${({ theme }) => theme.space.xxxxl / 2}px;
`;

const CardAvatar = styled(Avatar)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ theme }) => theme.space.xxxxl}px;
  height: ${({ theme }) => theme.space.xxxxl}px;
`;

const MdPageContainer = styled(PageContainer)`
  width: 100%;
  padding: ${({ theme }) => theme.space.md}px;
  & > * ~ * {
    margin-top: ${({ theme }) => theme.space.md}px;
  }
  ${({ theme }) => theme.media.sm} {
    width: 300px;
  }
`;

const testWork = [
  {
    id: 1,
    title: "媽媽的圍巾",
    tags: ["新詩", "懷舊", "女性"],
    event: "一件很小，很美的事情一件很小，很美的事情一件很小，很美的事情",
  },
  {
    id: 2,
    title: "媽媽的圍巾",
    tags: ["新詩", "懷舊", "女性"],
    event: "一件很小，很美的事情",
  },
  {
    id: 3,
    title: "媽媽的圍巾",
    tags: [1, 2, 3],
    event: "一件很小，很美的事情",
  },
];

export default function UserPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const me = useSelector(selectMe);
  const user = useSelector(selectUser);
  useEffect(() => {
    if (!Number(id) === me.id) dispatch(getUser({ id }));
  }, [id, me, dispatch]);
  const data = Number(id) === me.id ? me : user;
  return (
    <BackgroundPage>
      <Wrapper>
        <SidebarWrapper>
          <Card>
            <CardAvatar to={`/users/${data.id}`} image={data.portrait} />
            <H4 className="text-center">{data.nickname}</H4>
            <Pxs className="text-center">
              <LightText light>{"@" + data.username}</LightText>
            </Pxs>
            <Ps>
              {data.description}
              個人簡介區域之我很喜歡高麗菜。高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜。個人簡介區域之我很喜歡高麗菜。高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜高麗菜。
            </Ps>
            <ButtonGroup>
              <Button small primary>
                聯絡我
              </Button>
              <Button small secondary>
                編輯
              </Button>
            </ButtonGroup>
          </Card>
          <SmPageContainer>
            <H5 className="text-center">個人經歷</H5>
            <div>
              <Ps>{data.record}</Ps>
              <Ps>2020 年度最佳 OOO</Ps>
              <Ps>2020 年度最佳 OOO</Ps>
              <Ps>2020 年度最佳 OOO</Ps>
              <Ps>2020 年度最佳 OOO</Ps>
              <Ps>2020 年度最佳 OOO</Ps>
              <Ps>2020 年度最佳 OOO</Ps>
              <Ps>2020 年度最佳 OOO</Ps>
            </div>
          </SmPageContainer>
        </SidebarWrapper>
        <MdPageContainer>
          <H1>
            <HighLight>作品</HighLight>
          </H1>
          {testWork.map((test) => (
            <WorkListItem key={test.title} content={test} edit />
          ))}
        </MdPageContainer>
      </Wrapper>
    </BackgroundPage>
  );
}
