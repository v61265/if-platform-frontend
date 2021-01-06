import { React } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAvatar = styled.img`
  max-width: 40px;
  min-width: 40px;
  max-height: 40px;
  min-height: 40px;
  cursor: pointer;
  border-radius: 50px;
  background-image: url(${({ image }) => image});
  background-size: contain;
  border: 1px solid ${({ theme }) => theme.color.primary};
`;

export function Avatar({ image }) {
  return <StyledAvatar image={image} />;
}
Avatar.propTypes = {
  image: PropTypes.string,
};
