import styled from "styled-components";
import { Link } from "react-router-dom";

export const Avatar = styled(Link)`
  display: inline-block;
  width: ${({ theme }) => theme.space.lg}px;
  height: ${({ theme }) => theme.space.lg}px;
  border-radius: 50%;
  background-image: url(${({ image }) => image});
  background-size: contain;
  border: 1px solid ${({ theme }) => theme.color.primary};
`;
