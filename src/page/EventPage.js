import React from "react";
import styled from "styled-components";
import { Page, PageContainer, EventContainer } from "../components/Page";
import { H1, H4, H5, Hsb, Ps } from "../components/Text";
import { Avatar } from "../components/Avatar";
import { PageTitle } from "../components/Title";
import eventImage from "../png/event_image.png";

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

const StyledEventInProcess = styled(EventContainer)``;

const EventPicture = styled.img`
  width: 100%;
  height: auto;
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

const PinkButton = styled(H4)`
  color: ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.primary};
  padding: 22px 12px;
  margin: 10px;
  display: inline-block;
  border-radius: 10px;
  cursor: pointer;
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

const EventInProcess = () => {
  return (
    <StyledEventInProcess marginBottom={24}>
      <EventPicture src={eventImage} />
      <EventInfo>
        <Hsb>活動時間 | 2021/01/21</Hsb>
        <Hsb>活動地點 | XXX 大樹屋</Hsb>
        <Hsb>稿件篇數 | 20</Hsb>
        <Hsb>現場名額 | 20</Hsb>
        <Hsb>會議連結 | 點我</Hsb>
        <Hsb>音檔連結 | 點我</Hsb>
        <Ps>
          面對如此難題，我們必須設想周全。奧斯特洛夫斯基說過一句發人省思的話，光明給我們經驗，讀書給我們知識。他會這麼說是有理由的。文學靈魂似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。
          <br />
          <br />
          世界需要改革，需要對文學靈魂有新的認知。對我個人而言，文學靈魂不僅僅是一個重大的事件，還可能會改變我的人生。我們都知道，只要有意義，那麼就必須慎重考慮。當你搞懂後就會明白了。既然如此，我們要從本質思考，從根本解決問題。西塞羅說過一句經典的名言，只有在履行自己的義務中尋求快樂的人，才是自由地生活的人。這段話讓我的心境提高了一個層次。而這些並不是完全重要，更加重要的問題是，探討文學靈魂時，如果發現非常複雜，那麼想必不簡單。培根曾經說過，美德有如名香，經燃燒或壓抑而其香愈烈：蓋幸運最難顯露惡德而厄運最能顯露美德也。帶著這句話，我們還要更加慎重的審視這個問題。說到文學靈魂，你會想到什麼呢？文學靈魂，發生了會如何，不發生又會如何。文學靈魂對我來說有著舉足輕重的地位，必須要嚴肅認真的看待。在人類的歷史中，我們總是盡了一切努力想搞懂文學靈魂。科齊布斯基說過一句發人省思的話，有兩種容易悄悄過生活的方法，就是相信一切或懷疑一切。兩種方法都使我們省卻思考。這是撼動人心的。
        </Ps>
      </EventInfo>
    </StyledEventInProcess>
  );
};

const AttendCard = () => {
  return (
    <Block>
      <NumsInfo>
        <H5>現場參加人數：16</H5>
        <H5>線上參加人數：18</H5>
        <H5>現場候補人數：0</H5>
      </NumsInfo>
      <Buttons>
        <PinkButton>報名現場</PinkButton>
        <PinkButton>報名線上</PinkButton>
      </Buttons>
    </Block>
  );
};

const WorkCard = () => {
  return (
    <Block>
      <NumsInfo>
        <H5>稿件篇數：16</H5>
      </NumsInfo>
      <Buttons>
        <PinkButton>稿件列表</PinkButton>
        <PinkButton>我要投稿</PinkButton>
      </Buttons>
    </Block>
  );
};

const PortraitBlock = () => {
  return (
    <div>
      <Portrait image={"https://i.imgur.com/sW6aO14.png"} />
      <NicknameTag>Lidemy(@lidemymtr04)</NicknameTag>
    </div>
  );
};

const AttendeeBlock = ({ content }) => {
  return (
    <StyledAttendeeBlock>
      <H5>{content}</H5>
      <AttedeePortraits>
        <PortraitBlock />
        <PortraitBlock />
        <PortraitBlock />
        <PortraitBlock />
        <PortraitBlock />
        <PortraitBlock />
        <PortraitBlock />
        <PortraitBlock />
        <PortraitBlock />
        <PortraitBlock />
        <PortraitBlock />
      </AttedeePortraits>
    </StyledAttendeeBlock>
  );
};

export default function EventPage() {
  return (
    <MaxPage>
      <AllWrapper>
        <PageTitle
          highLight={"報名"}
          title={"現正進行中的活動名稱"}
          color={({ theme }) => theme.color.primary}
        />
        <Wrapper>
          <Main>
            <EventInProcess />
            <AttendCard />
            <WorkCard />
          </Main>
          <Sidebar>
            <AttendeeBlock content={"現場參加者"} />
            <AttendeeBlock content={"線上參加者"} />
            <AttendeeBlock content={"候補"} />
          </Sidebar>
        </Wrapper>
      </AllWrapper>
    </MaxPage>
  );
}
