import styled from "styled-components";
import { Button, TextLink } from "../components/Button";
import logoImage from "../png/logo_image.png";
import { Ps, Pxxs } from "../components/Text";
import { TextModal, FormModal } from "../components/Modal";
import { Page, PageContainer } from "../components/Page";
import { formContent, textModalContent } from "../constants/variable";
import { useState } from "react";
import { IconForm } from "../components/Form";
import { DashLine } from "../components/Line";
import { FlexCenter } from "../components/Flex";

const LoginPageContainer = styled(PageContainer)`
  max-width: 620px;
  ${FlexCenter}
  position: relative;
  text-align: center;
  ${({ theme }) => theme.media.sm} {
    flex-direction: column-reverse;
  }
`;

const LoginImage = styled.img`
  ${({ theme }) => theme.media.sm} {
    display: none;
  }
`;

const LoginDiv = styled.div`
  flex: 1 0;
  padding: ${({ theme }) => theme.space.lg}px;
  & > * ~ * {
    margin-top: ${({ theme }) => theme.space.md}px;
  }
  ${({ theme }) => theme.media.sm} {
    flex-grow: 0;
  }
`;

const initIsModal = {
  register: false,
  registerSuccess: false,
  forgetPassword: false,
  resetSuccess: false,
};

export default function LoginPage() {
  const [isModal, setIsModal] = useState(initIsModal);
  const handleOpenModal = ({ target }) => {
    setIsModal({ ...isModal, [target.value]: true });
  };
  const handleCloseModal = () => {
    setIsModal(initIsModal);
  };
  return (
    <Page>
      <LoginPageContainer>
        <LoginImage src={logoImage} alt="想像朋友寫作會" />
        <LoginDiv>
          <IconForm goal={"login"} content={formContent.login} />
          <Pxxs>
            <TextLink
              secondary
              as="button"
              value={"forgetPassword"}
              onClick={handleOpenModal}
            >
              忘記密碼
            </TextLink>
          </Pxxs>

          <DashLine />
          <Ps>還沒有帳號嗎？</Ps>
          <Button large value={"register"} onClick={handleOpenModal}>
            註冊
          </Button>
        </LoginDiv>
      </LoginPageContainer>
      {Object.keys(isModal).map((modal) => {
        if (!isModal[modal]) return "";
        if (formContent[modal])
          return (
            <FormModal
              key={modal}
              goal={modal}
              content={formContent[modal]}
              handleCloseModal={handleCloseModal}
            />
          );
        return (
          <TextModal
            key={modal}
            content={textModalContent[modal]}
            handleCloseModal={handleCloseModal}
          />
        );
      })}
    </Page>
  );
}
