import styled from "styled-components";

export const DashLine = styled.hr`
  border-top: 1px dotted ${({ theme }) => theme.color.secondary};
`;
