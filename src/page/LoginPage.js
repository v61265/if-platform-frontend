import styled from "styled-components";
import { LinkButton, Button } from "../components/Button";
import { IconInput } from "../components/Input";
import logoImage from "../png/logo_image.png";
import { AlertText, Ps } from "../components/Text";
import { TextModal, FormModal } from "../components/Modal";
import { Page, PageContainer } from "../components/Page";
import { modalContent } from "../constants/variable";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMe,
  selectUserStatus,
  selectUserError,
} from "../redux/reducer/userSlice";
import { getAuthToken, setAuthToken } from "../utils";
import { useHistory } from "react-router-dom";

const LoginPageContainer = styled(PageContainer)`
  display: flex;
  position: relative;
  text-align: center;
  ${({ theme }) => theme.media.sm} {
    flex-direction: column-reverse;
  }
`;

const LoginImage = styled.img`
  width: 200px;
  height: 100%;
  ${({ theme }) => theme.media.sm} {
    display: none;
  }
`;

const LoginForm = styled.div`
  flex: 1 0;
  padding: ${({ theme }) => theme.space.lg}px;
  & > * ~ * {
    margin-top: ${({ theme }) => theme.space.md}px;
  }
  ${({ theme }) => theme.media.sm} {
    flex-grow: 0;
  }
`;

const DashLine = styled.hr`
  border-top: 1px dotted ${({ theme }) => theme.color.secondary};
`;

const initIsModal = {};
Object.keys(modalContent).map((modal) => (initIsModal[modal] = false));

export default function LoginPage() {
  const dispatch = useDispatch();
  const status = useSelector(selectUserStatus);
  // const isLoading = useSelector(selectUserIsLoading);
  const errorMessage = useSelector(selectUserError);
  const history = useHistory();
  const [formData, setFormData] = useState({
    goal: "login",
    username: "",
    password: "",
  });
  const handleFormData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  const handleGetMe = () => {
    dispatch(getMe(formData));
    if (status.login === "suceeded") return history.push("/");
    if (getAuthToken()) setAuthToken(null);
  };
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
    <Page>
      <LoginPageContainer>
        <LoginImage src={logoImage} alt="想像朋友寫作會" />
        <LoginForm>
          <IconInput
            type={"text"}
            name={"username"}
            placeholder={"你的帳戶"}
            icon={"username"}
            value={formData.username}
            handleFormData={handleFormData}
          />
          <IconInput
            type={"text"}
            name={"password"}
            placeholder={"你的密碼"}
            icon={"password"}
            value={formData.password}
            handleFormData={handleFormData}
          />
          <LinkButton
            text={"忘記密碼"}
            value={modalContent.forgetPassword.name}
            handleOnClick={handleOpenModal}
          />
          <AlertText>{status.login === "failed" ? errorMessage : ""}</AlertText>
          <Button text={"登入"} value={"login"} handleOnClick={handleGetMe} />
          <DashLine />
          <Ps>還沒有帳號嗎？</Ps>
          <Button
            value={modalContent.register.name}
            handleOnClick={handleOpenModal}
            text={"註冊"}
          />
        </LoginForm>
      </LoginPageContainer>
      {Object.keys(isModal).map((modal) => {
        if (!isModal[modal]) return "";
        if (modalContent[modal].type === "form")
          return (
            <FormModal
              key={modal}
              status={status[modal]}
              content={modalContent[modal]}
              errorMessage={errorMessage}
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
    </Page>
  );
}
