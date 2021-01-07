import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getMe,
  selectUserError,
  selectUserStatus,
} from "../redux/reducer/userSlice";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { getAuthToken, setAuthToken } from "../utils";
import { IconInput, IconSelect } from "./Input";
import { AlertText, H4, Pxxs } from "./Text";
import { StyledButton } from "./Button";
import PropTypes from "prop-types";

const StyledIconForm = styled.form`
  & > * ~ * {
    margin-top: ${({ theme }) => theme.space.md}px;
  }
`;
export function IconForm({ goal, content }) {
  const dispatch = useDispatch();
  const status = useSelector(selectUserStatus);
  const errorMessage = useSelector(selectUserError);
  const history = useHistory();
  const [value, setValue] = useState(() => {
    let initState = { goal };
    Object.keys(content.inputs).forEach((key) => {
      initState[key] = "";
    });
    return initState;
  });
  const handleValue = (name, text) => {
    setValue({ ...value, [name]: text });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getMe(value));
    if (status[value.goal] === "suceeded") return history.push("/");
    if (getAuthToken()) setAuthToken(null);
  };
  return (
    <StyledIconForm onSubmit={handleSubmit}>
      {content.title && <H4>{content.title}</H4>}
      {content.description && <Pxxs>{content.description}</Pxxs>}{" "}
      {Object.entries(content.inputs).map((input) =>
        input[1].type === "select" ? (
          <IconSelect
            key={input[0]}
            name={input[0]}
            placeholder={input[1].placeholder}
            icon={input[1].icon}
            options={input[1].options}
            value={value[input[0]]}
            handleValue={handleValue}
          />
        ) : (
          <IconInput
            key={input[0]}
            type={input[1].type}
            name={input[0]}
            placeholder={input[1].placeholder}
            icon={input[1].icon}
            value={value[input[0]]}
            handleValue={handleValue}
          />
        )
      )}
      {status[goal] === "failed" && <AlertText>{errorMessage}</AlertText>}
      <StyledButton as="input" type="submit" value={content.submit} />
    </StyledIconForm>
  );
}
IconForm.propTypes = {
  goal: PropTypes.string,
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    submit: PropTypes.string,
    inputs: PropTypes.objectOf(
      PropTypes.shape({
        type: PropTypes.string,
        placeholder: PropTypes.string,
        icon: PropTypes.string,
        options: PropTypes.arrayOf(
          PropTypes.shape({ value: PropTypes.string, name: PropTypes.string })
        ),
      })
    ),
  }),
};
