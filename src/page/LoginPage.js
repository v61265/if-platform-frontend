import styled from "styled-components";
import { LinkButton, Button } from "../components/Button";
import { IconInput } from "../components/Input";
import { Logo } from "../components/Image";
import { MiddleText } from "../components/Text";
import { TextModal, FormModal } from "../components/Modal";
import { Page, PageContainer } from "../components/Page";
import { modalContent, alertText } from "../constants/variable";
import { useState } from "react";

const MaxPage = styled(Page)`
  height: 100vh;
`;
const LoginPageContainer = styled(PageContainer)`
  display: flex;
  position: relative;
  ${({ theme }) => theme.media.sm} {
    flex-direction: column-reverse;
  }
`;
const LoginImage = styled(Logo)`
  width: 200px;
  ${({ theme }) => theme.media.sm} {
    width: 40px;
    height: 100px;
    margin: 0 auto;
    margin-bottom: ${({ theme }) => theme.space.md}px;
  }
`;
const LoginForm = styled.div`
  flex: 1 0;
  padding: ${({ theme }) => theme.space.lg}px;
  text-align: center;
  & > * ~ * {
    margin-top: ${({ theme }) => theme.space.md}px;
  }
  ${({ theme }) => theme.media.sm} {
    flex-grow: 0;
  }
`;
const DashLine = styled.hr`
  border-top: 1px dotted ${({ theme }) => theme.color.primary};
`;

const initIsModal = {};
Object.keys(modalContent).map((modal) => (initIsModal[modal] = false));

export default function LoginPage() {
  const [isModal, setIsModal] = useState(initIsModal);
  const handleOpenModal = ({ target }) => {
    setIsModal({ ...isModal, [target.value]: true });
  };
  const handleCloseModal = () => {
    setIsModal(initIsModal);
  };
  const handleSubmit = ({ target }) => {
    alert(target.value + " submit");
    handleCloseModal({ target });
  };
  return (
    <MaxPage>
      <LoginPageContainer>
        <LoginImage>想像朋友寫作會</LoginImage>
        <LoginForm>
          <IconInput type={"text"} placeholder={"你的帳戶"} icon={"username"} />
          <IconInput
            type={"text"}
            placeholder={"你的密碼"}
            icon={"password"}
            alert={true ? alertText.usernamePasswordIncorrect : ""}
          />
          <LinkButton
            value={modalContent.forgetPassword.name}
            onClick={handleOpenModal}
          >
            忘記密碼
          </LinkButton>
          <Button>登入</Button>
          <DashLine />
          <MiddleText>還沒有帳號嗎？</MiddleText>
          <Button value={modalContent.register.name} onClick={handleOpenModal}>
            註冊
          </Button>
        </LoginForm>
      </LoginPageContainer>
      {Object.keys(isModal).map((modal) => {
        if (!isModal[modal]) return "";
        if (modalContent[modal].type === "form")
          return (
            <FormModal
              key={modal}
              content={modalContent[modal]}
              handleCloseModal={handleCloseModal}
              handleSubmit={handleSubmit}
            />
          );
        return (
          <TextModal
            key={modal}
            content={modalContent[modal]}
            handleCloseModal={handleCloseModal}
          />
        );
      })}
    </MaxPage>
  );
}
