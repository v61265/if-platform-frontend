import styled from "styled-components";
import { FrontIcon } from "./Image";
import { StyledPfc } from "./Text";
import Down from "../svg/down.svg";
import PropTypes from "prop-types";

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  ${StyledPfc}
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
export const IconInput = ({
  type,
  name,
  placeholder,
  icon,
  value,
  handleValue,
}) => {
  const handleOnChange = ({ target }) => {
    handleValue(target.name, target.value);
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
};
IconInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  handleValue: PropTypes.func,
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
export const IconSelect = ({
  name,
  placeholder,
  icon,
  options,
  value,
  handleValue,
}) => {
  const handleOnChange = ({ target }) => {
    handleValue(target.name, target.value);
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
};
IconSelect.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  value: PropTypes.string,
  handleValue: PropTypes.func,
};
