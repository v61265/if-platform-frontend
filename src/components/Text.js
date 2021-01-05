import styled from "styled-components";

export const H1 = styled.h2`
  font-size: ${({ theme }) => theme.font.xxxl}px;
  font-weight: bold;
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.font.xxl}px;
  font-weight: bold;
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.font.xl}px;
  font-weight: bold;
`;

export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.font.lg}px;
  font-weight: medium;
`;

export const Pfc = styled.p`
  font-size: ${({ theme }) => theme.font.md}px;
  line-height: 32px;
`;

export const H5 = styled.h5`
  font-size: ${({ theme }) => theme.font.md}px;
  font-weight: medium;
`;

export const Hsb = styled.h6`
  font-size: ${({ theme }) => theme.font.sm}px;
  font-weight: bold;
`;

export const Hsc = styled.h6`
  font-size: ${({ theme }) => theme.font.sm}px;
  font-weight: medium;
`;

export const Ps = styled.p`
  font-size: ${({ theme }) => theme.font.sm}px;
`;

export const Pxs = styled.p`
  font-size: ${({ theme }) => theme.font.xs}px;
`;

export const Pxxs = styled.p`
  font-size: ${({ theme }) => theme.font.xxs}px;
`;

export const AlertText = styled(Pxs)`
  margin-top: ${({ theme }) => theme.space.md}px;
  color: ${({ theme }) => theme.color.alert};
  ${({ theme }) => theme.media.sm} {
    margin-top: ${({ theme }) => theme.space.xs}px;
  }
`;
