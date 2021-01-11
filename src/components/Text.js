import styled, { css } from "styled-components";

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

export const StyledH4 = css`
  font-size: ${({ theme }) => theme.font.lg}px;
  font-weight: medium;
`;

export const H4 = styled.h4`
  ${StyledH4};
`;

export const StyledPfc = css`
  font-size: ${({ theme }) => theme.font.md}px;
  line-height: 32px;
`;

export const StyledH5 = css`
  font-size: ${({ theme }) => theme.font.md}px;
  font-weight: medium;
`;

export const H5 = styled.h5`
  ${StyledH5}
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

export const StyledPxs = css`
  font-size: ${({ theme }) => theme.font.xs}px;
`;

export const Pxs = styled.p`
  ${StyledPxs};
`;

export const StyledPxxs = css`
  font-size: ${({ theme }) => theme.font.xxs}px;
`;
export const Pxxs = styled.p`
  ${StyledPxxs};
`;

export const AlertText = styled(Pxs)`
  margin-top: ${({ theme }) => theme.space.md}px;
  color: ${({ theme }) => theme.color.alert};
  ${({ theme }) => theme.media.sm} {
    margin-top: ${({ theme }) => theme.space.xs}px;
  }
`;

export const LightText = styled.span`
  ${({ theme, light }) => light && `color: ${theme.color.grey};`}
  ${({ theme, dark }) => dark && `color: ${theme.color.greyDark};`}
  font-weight: bold;
`;

export const HighLight = styled.span`
  display: inline-block;
  box-shadow: inset 0px -24px 0px 0px ${({ theme }) => theme.color.primary};
`;
