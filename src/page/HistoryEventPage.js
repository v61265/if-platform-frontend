import React from "react";
import styled from "styled-components";
import { Page, PageContainer } from "../components/Page";
import { H1, H4, H5, Hsb, Ps } from "../components/Text";
import { Avatar } from "../components/Avatar";
import eventImage from "../png/event_image2.png";
import backgroundImage from "../png/grey_background_image.png";

const MaxPage = styled(Page)`
  flex-direction: column;
  justify-content: center;
  & > * {
    margin-bottom: 24px;
  }
`;

const Background = styled.img`
  position: absolute;
  top: 320px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }
  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

const Highlight = styled(H1)`
  display: inline-block;
  box-shadow: inset 0px -24px 0px 0px ${({ theme }) => theme.color.grey};
`;
const EventTitle = styled(H1)`
  display: inline-block;
`;

const PageTitle = styled.div`
  ${({ theme }) => theme.media.sm} {
    width: 325px;
    & ${EventTitle} {
      display: block;
    }
  }
`;

const StyledEventInProcess = styled(PageContainer)`
  width: 936px;
  margin: 24px auto;
  z-index: 1;
  & > * {
    margin-bottom: 24px;
  }
  ${({ theme }) => theme.media.sm} {
    width: 325px;
  }
`;
const EventPictureWraper = styled.div``;
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

const Block = styled(PageContainer)`
  width: 936px;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto ${({ theme }) => theme.space.md}px auto;
  z-index: 1;
  ${({ theme }) => theme.media.sm} {
    width: 325px;
    padding: 50px 25px;
    flex-direction: column;
    justify-content: center;
    & div {
      margin-bottom: 20px;
    }
  }
`;
const Buttons = styled.div`
  display: flex;
`;

const PinkButton = styled(H4)`
  color: ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.primary};
  padding: 22px 12px;
  margin-right: 20px;
  display: inline-block;
  border-radius: 10px;
  cursor: pointer;
`;

const GreyButton = styled(PinkButton)`
  background: ${({ theme }) => theme.color.greyLight};
`;
const Sidebar = styled.div`
  margin-top: 72px;
  z-index: 1;
  ${({ theme }) => theme.media.sm} {
    margin-top: 0px;
  }
`;
const StyledAttendeeBlock = styled.div`
  width: 300px;
  padding: 25px 16px;
  background-color: ${({ theme }) => theme.color.white};
  margin-bottom: ${({ theme }) => theme.space.md}px;
  text-align: center;
  & ${H5} {
    margin-bottom: 15px;
  }
  ${({ theme }) => theme.media.sm} {
    width: 325px;
  }
`;
const NicknameTag = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 5px;
  font-size: 20px;
  line-height: 30px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  transform: translate(-40%);
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
    <StyledEventInProcess>
      <EventPictureWraper>
        <EventPicture src={eventImage} />
      </EventPictureWraper>
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
      <div>
        <H5>現場參加人數：16</H5>
        <H5>線上參加人數：18</H5>
        <H5>現場候補人數：0</H5>
      </div>
      <Buttons>
        <GreyButton>已結束</GreyButton>
        <GreyButton>已結束</GreyButton>
      </Buttons>
    </Block>
  );
};

const WorkCard = () => {
  return (
    <Block>
      <div>
        <H5>稿件篇數：16</H5>
      </div>
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
      <Background src={backgroundImage} alt="" />
      <Wrapper>
        <div>
          <PageTitle>
            <Highlight>已結束</Highlight>
            <EventTitle>一件很小，很美的事情</EventTitle>
          </PageTitle>
          <EventInProcess />
          <AttendCard />
          <WorkCard />
        </div>
        <Sidebar>
          <AttendeeBlock content={"現場參加者"} />
          <AttendeeBlock content={"線上參加者"} />
          <AttendeeBlock content={"候補"} />
        </Sidebar>
      </Wrapper>
    </MaxPage>
  );
}
