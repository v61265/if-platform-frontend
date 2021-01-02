import styled from "styled-components";

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.lg}px;
`;

export const MiddleText = styled.p`
  font-size: ${({ theme }) => theme.font.md}px;
  ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.font.sm}px;
  }
`;

export const SmallText = styled.p`
  font-size: ${({ theme }) => theme.font.sm}px;
  ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.font.xs}px;
  }
`;

export const AlertText = styled(SmallText)`
  margin-top: ${({ theme }) => theme.space.sm}px;
  color: ${({ theme }) => theme.color.alert};
  ${({ theme }) => theme.media.sm} {
    margin-top: ${({ theme }) => theme.space.xs}px;
  }
`;
