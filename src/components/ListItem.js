import styled from "styled-components";
import { DashLine } from "./Line";
import { H3, LightText, Pxs, TextOverflow } from "./Text";
import { ButtonGroup, Button, TextLink } from "./Button";
import PropTypes from "prop-types";
import { FlexBetween } from "../components/Flex";
import { Link } from "react-router-dom";

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

export const WorkListItem = ({ data, edit }) => (
  <>
    <StyledWorkListItem>
      <WorkListFlex>
        <div>
          <H3>
            <TextLink to={`/work/${data.id}`}>{data.title}</TextLink>
          </H3>
          <Pxs className="space">
            {data.Tags.map((tag) => (
              <TextLink key={tag.id} to={`/${tag.id}`}>
                #{tag.content}
              </TextLink>
            ))}
          </Pxs>
          <Pxs className="space">
            <LightText>來自</LightText>
            <EventLink to={`/event-page/${data.eventId}`} button primary>
              {data.Event.title}
            </EventLink>
          </Pxs>
        </div>
        <ButtonGroup vertical>
          <Button
            small
            secondary
            as={Link}
            to={`/event-page/${data.eventId}/works/${data.id}`}
          >
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
  data: PropTypes.object,
  edit: PropTypes.bool,
};
