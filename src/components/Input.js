import styled from "styled-components";
import { FrontIcon } from "./Image";
import { AlertText } from "./Text";
import Down from "../Icon/down.svg";
import PropTypes from "prop-types";
import { useState } from "react";

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  background: ${({ theme }) => theme.color.backgroundLight};
  color: ${({ theme }) => theme.color.black};
  width: 100%;
  font-size: ${({ theme }) => theme.font.md}px;
  line-height: 1.5;
  border-radius: 10px;
  padding: ${({ theme }) => `${theme.space.sm}px ${theme.space.sm}px`};
  padding-left: ${({ theme }) => theme.icon.md + theme.space.sm * 2}px;
  box-shadow: ${({ theme }) => theme.shadow};
  ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.font.sm}px;
    padding: ${({ theme }) => `${theme.space.xs - 1}px ${theme.space.xs}px`};
    padding-left: ${({ theme }) => theme.icon.sm + theme.space.xs * 1.5}px;
  }
`;
export function IconInput({ type, name, placeholder, icon, alert }) {
  const [value, setValue] = useState("");
  const handleOnChange = ({ target }) => {
    setValue(target.value);
  };
  return (
    <InputWrapper>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        required
      />
      <FrontIcon icon={icon} />
      {alert && <AlertText>{alert}</AlertText>}
    </InputWrapper>
  );
}
IconInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  alert: PropTypes.string,
};

const Select = styled.select`
  color: ${({ theme }) => theme.color.black};
  width: 100%;
  font-size: ${({ theme }) => theme.font.md}px;
  line-height: 1.5;
  border-radius: 10px;
  padding: ${({ theme }) => `${theme.space.sm}px ${theme.space.sm}px`};
  padding-left: ${({ theme }) => theme.icon.md + theme.space.sm * 2}px;
  appearance: none;
  background: ${({ theme }) => theme.color.backgroundLight} url(${Down}) right
    center no-repeat;
  background-size: ${({ theme }) => theme.icon.md}px;
  box-shadow: ${({ theme }) => theme.shadow};
  ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.font.sm}px;
    padding: ${({ theme }) => `${theme.space.xs - 1}px ${theme.space.xs}px`};
    padding-left: ${({ theme }) => theme.icon.sm + theme.space.xs * 1.5}px;
  }
  &:required:invalid {
    color: gray;
  }
`;
export function IconSelect({ name, placeholder, icon, options, alert }) {
  const [value, setValue] = useState("");
  const handleOnChange = ({ target }) => {
    setValue(target.value);
  };
  return (
    <InputWrapper>
      <Select name={name} value={value} onChange={handleOnChange} required>
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
      <FrontIcon icon={icon} />
      {alert && <AlertText>{alert}</AlertText>}
    </InputWrapper>
  );
}
IconSelect.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  alert: PropTypes.string,
};

const InputGroup = styled.div`
  display: flex;
  & > div:first-of-type {
    flex-basis: 40%;
  }
  & > div ~ div {
    margin-left: ${({ theme }) => theme.font.sm}px;
  }
  ${({ theme }) => theme.media.sm} {
    & {
      flex-direction: column;
    }
    & > div ~ div {
      margin-left: 0;
      margin-top: ${({ theme }) => theme.space.md}px;
    }
  }
`;
export function IconSelectInput({ select, input, alert }) {
  return (
    <InputGroup>
      <IconSelect
        name={select.name}
        placeholder={select.placeholder}
        icon={select.icon}
        options={select.options}
        alert={""}
      />
      <IconInput
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        icon={input.icon}
        alert={""}
      />
      {alert && <AlertText>{alert}</AlertText>}
    </InputGroup>
  );
}
IconSelectInput.propTypes = {
  select: PropTypes.shape({
    placeholder: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }),
  input: PropTypes.shape({
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
  }),
  alert: PropTypes.string,
};
