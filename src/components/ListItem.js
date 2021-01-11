import styled from "styled-components";
import { DashLine } from "./Line";
import { H3, LightText, Pxs, TextOverflow } from "./Text";
import { ButtonGroup, Button, TextLink } from "./Button";
import PropTypes from "prop-types";
import { FlexBetween } from "../components/Flex";

const StyledWorkListItem = styled.div`
  & > * ~ * {
    margin-top: ${({ theme }) => theme.font.md}px;
  }
`;

const WorkListFlex = styled.div`
  ${FlexBetween}
  & > div:first-of-type > * ~ * {
    margin-top: ${({ theme }) => theme.font.xs}px;
  }
  .space > * ~ * {
    margin-left: ${({ theme }) => theme.font.xs}px;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: flex-start;
    & > div ~ div {
      margin-top: ${({ theme }) => theme.space.md}px;
    }
  }
`;

const EventLink = styled(TextLink)`
  max-width: 190px;
  ${TextOverflow}
  vertical-align: -35%;
`;

export const WorkListItem = ({ content, edit }) => (
  <>
    <StyledWorkListItem>
      <WorkListFlex>
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
            <EventLink to={`/event/${content.event}`} button primary>
              {content.event}
            </EventLink>
          </Pxs>
        </div>
        <ButtonGroup vertical>
          <Button small secondary>
            {edit && "編輯稿件"}
          </Button>
          <Button small secondary>
            {edit && "設定權限"}
          </Button>
        </ButtonGroup>
      </WorkListFlex>
      <DashLine />
    </StyledWorkListItem>
  </>
);
WorkListItem.propTypes = {
  content: PropTypes.object,
  edit: PropTypes.bool,
};
