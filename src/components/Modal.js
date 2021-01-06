import styled from "styled-components";
import { Page, PageContainer } from "./Page";
import { CloseButton, Button } from "./Button";
import { IconInput, IconSelectInput } from "./Input";
import { H4, Ps, Pxxs, AlertText } from "./Text";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getMe,
  selectUserStatus,
  selectUserError,
} from "../redux/reducer/userSlice";
import { getAuthToken, setAuthToken } from "../utils";

const Mask = styled(Page)`
  background: ${({ theme }) => theme.color.mask};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 6;
`;
const StyledModal = styled(PageContainer)`
  width: 600px;
  position: relative;
  margin: auto 0;
`;

const StyledTextModal = styled(StyledModal)`
  padding: ${({ theme }) => theme.space.lg + 20}px
    ${({ theme }) => theme.space.lg}px ${({ theme }) => theme.space.xl}px;
  & p {
    text-align: center;
  }
`;
export function TextModal({ content, handleCloseModal }) {
  return (
    <Mask>
      <StyledTextModal>
        <CloseButton handleCloseModal={handleCloseModal} />
        {content.texts.map((text) => (
          <Ps>{text}</Ps>
        ))}
      </StyledTextModal>
    </Mask>
  );
}
TextModal.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    texts: PropTypes.arrayOf(PropTypes.string),
  }),
  handleCloseModal: PropTypes.func,
};

const StyledFormModal = styled(StyledModal)`
  padding: ${({ theme }) => theme.space.lg}px;
  & > *:nth-child(2) ~ * {
    margin-top: ${({ theme }) => theme.space.md}px;
  }
`;

// test register
// const registerInitState = {
//   goal: "register",
//   username: "test",
//   password: "test",
//   passwordAgain: "test",
//   nickname: "test",
//   email: "test",
//   session: "gs_1",
//   contact: "test",
// };

const registerInitState = {
  goal: "register",
  username: "",
  password: "",
  passwordAgain: "",
  nickname: "",
  email: "",
  session: "",
  contact: "",
};

const resetPasswordInitState = {
  goal: "resetPassword",
  oldPassword: "",
  newPassword: "",
  againPassword: "",
};

const forgetPasswordInitState = {
  goal: "forgetPassword",
  email: "",
  newPassword: "",
  againPassword: "",
};

export function FormModal({ content, handleCloseModal }) {
  const dispatch = useDispatch();
  const status = useSelector(selectUserStatus);
  // const isLoading = useSelector(selectUserIsLoading);
  const errorMessage = useSelector(selectUserError);
  const history = useHistory();
  const [formData, setFormData] = useState(
    content.name === registerInitState.goal
      ? registerInitState
      : content.name === forgetPasswordInitState.goal
      ? forgetPasswordInitState
      : content.name === resetPasswordInitState.goal
      ? resetPasswordInitState
      : {}
  );
  const handleFormData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  const handleSubmit = () => {
    console.log(formData);
    dispatch(getMe(formData));
    if (status[formData.goal] === "suceeded") return history.push("/");
    if (getAuthToken()) setAuthToken(null);
  };
  return (
    <Mask>
      <StyledFormModal>
        <CloseButton handleCloseModal={handleCloseModal} />
        <H4>{content.title}</H4>
        <Pxxs>{content.description}</Pxxs>
        {content.components.map((component) =>
          component.type === "inputGroup" ? (
            <IconSelectInput
              key={component.name}
              name={component.name}
              select={component.select}
              input={component.input}
              value={formData[component.name]}
              handleFormData={handleFormData}
            />
          ) : (
            <IconInput
              key={component.name}
              type={component.type}
              name={component.name}
              placeholder={component.placeholder}
              icon={component.icon}
              value={formData[component.name]}
              handleFormData={handleFormData}
            />
          )
        )}
        <AlertText>
          {status[formData.goal] === "failed" ? errorMessage : ""}
        </AlertText>
        <Button
          value={content.success}
          handleOnClick={handleSubmit}
          text={content.submit}
        />
      </StyledFormModal>
    </Mask>
  );
}
FormModal.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    components: PropTypes.arrayOf(PropTypes.object),
    submit: PropTypes.string,
    success: PropTypes.string,
  }),
  handleCloseModal: PropTypes.func,
};
