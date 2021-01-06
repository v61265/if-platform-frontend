import styled from "styled-components";
import { FrontIcon } from "./Image";
import { Pfc } from "./Text";
import Down from "../svg/down.svg";
import PropTypes from "prop-types";
import { useState } from "react";

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled(Pfc)`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  width: 100%;
  border-radius: 10px;
  padding: ${({ theme }) => theme.space.sm}px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const StyledIconInput = styled(StyledInput)`
  padding-left: ${({ theme }) =>
    theme.icon.md + theme.space.sm + theme.font.xs}px;
`;

export function IconInput({
  type,
  name,
  placeholder,
  icon,
  value,
  handleFormData,
}) {
  const handleOnChange = ({ target }) => {
    handleFormData(name, target.value);
  };
  return (
    <InputWrapper>
      <StyledIconInput
        as="input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        required
      />
      <FrontIcon icon={icon} />
    </InputWrapper>
  );
}
IconInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  handleFormData: PropTypes.func,
};

const StyledIconSelect = styled(StyledIconInput)`
  appearance: none;
  background: ${({ theme }) => theme.color.white} url(${Down}) right center
    no-repeat;
  background-size: ${({ theme }) => theme.icon.md}px;
  &:required:invalid {
    color: gray;
  }
`;
export function IconSelect({
  name,
  placeholder,
  icon,
  options,
  value,
  handleFormData,
}) {
  const handleOnChange = ({ target }) => {
    handleFormData(name, target.value);
  };
  return (
    <InputWrapper>
      <StyledIconSelect
        as="select"
        name={name}
        value={value}
        onChange={handleOnChange}
        required
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </StyledIconSelect>
      <FrontIcon icon={icon} />
    </InputWrapper>
  );
}
IconSelect.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  value: PropTypes.string,
  handleFormData: PropTypes.func,
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
export function IconSelectInput({
  name,
  select,
  input,
  value,
  handleFormData,
}) {
  const [valueGroup, setValueGroup] = useState({
    [select.name]: value.slice(0, 2),
    [input.name]: value.slice(3),
  });
  const handleValueGroup = (key, value) => {
    setValueGroup({ ...valueGroup, [key]: value });
    if (Object.values(valueGroup).some((item) => item !== "")) {
      handleFormData(
        name,
        `${valueGroup[select.name]}_${valueGroup[input.name]}`
      );
    }
  };
  return (
    <InputGroup>
      <IconSelect
        name={select.name}
        placeholder={select.placeholder}
        icon={select.icon}
        options={select.options}
        value={valueGroup[select.name]}
        handleFormData={handleValueGroup}
      />
      <IconInput
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        icon={input.icon}
        value={valueGroup[input.name]}
        handleFormData={handleValueGroup}
      />
    </InputGroup>
  );
}
IconSelectInput.propTypes = {
  name: PropTypes.string,
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
  value: PropTypes.string,
  handleFormData: PropTypes.func,
};
