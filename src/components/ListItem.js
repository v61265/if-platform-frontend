import styled from "styled-components";
import { DashLine } from "./Line";
import { H3, LightText, Pxs } from "./Text";
import { ButtonGroup, Button, TextLink } from "./Button";
import PropTypes from "prop-types";

const StyledWorkListItem = styled.div`
  & > * ~ * {
    margin-top: ${({ theme }) => theme.font.md}px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div:first-of-type > * ~ * {
    margin-top: ${({ theme }) => theme.font.xs}px;
  }
  .space > * ~ * {
    margin-left: ${({ theme }) => theme.font.xs}px;
  }
`;

export const WorkListItem = ({ content, edit }) => (
  <>
    <StyledWorkListItem>
      <Flex>
        <div>
          <H3>
            <TextLink to={`/work/${content.id}`}>{content.title}</TextLink>
          </H3>
          <Pxs className="space">
            {content.tags.map((tag) => (
              <TextLink key={tag} to={`/${tag}`}>
                #{tag}
              </TextLink>
            ))}
          </Pxs>
          <Pxs className="space">
            <LightText>來自</LightText>
            <TextLink to={`/event/${content.event}`} button primary>
              {content.event}
            </TextLink>
          </Pxs>
        </div>
        <ButtonGroup>
          <Button small secondary>
            {edit && "編輯稿件"}
          </Button>
          <Button small secondary>
            {edit && "設定權限"}
          </Button>
        </ButtonGroup>
      </Flex>
      <DashLine />
    </StyledWorkListItem>
  </>
);
WorkListItem.propTypes = {
  content: PropTypes.object,
  edit: PropTypes.bool,
};
