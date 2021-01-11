import styled from "styled-components";
import { MaskPage, PageContainer } from "./Page";
import { CloseButton } from "./Button";
import { Ps } from "./Text";
import PropTypes from "prop-types";
import { IconForm } from "./Form";

const StyledModal = styled(PageContainer)`
  width: 600px;
  position: relative;
  margin: auto 0;
`;

const StyledTextModal = styled(StyledModal)`
  padding: ${({ theme }) => theme.space.lg + 20}px
    ${({ theme }) => theme.space.lg}px ${({ theme }) => theme.space.xl}px;
  & p {
    text-align: center;
  }
`;
export function TextModal({ content, handleCloseModal }) {
  return (
    <MaskPage>
      <StyledTextModal>
        <CloseButton handleCloseModal={handleCloseModal} />
        {content.map((text) => (
          <Ps>{text}</Ps>
        ))}
      </StyledTextModal>
    </MaskPage>
  );
}
TextModal.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string),
  handleCloseModal: PropTypes.func,
};

const StyledFormModal = styled(StyledModal)`
  padding: ${({ theme }) => theme.space.lg}px;
`;
export function FormModal({ goal, content, handleCloseModal }) {
  return (
    <MaskPage>
      <StyledFormModal>
        <CloseButton handleCloseModal={handleCloseModal} />
        <IconForm goal={goal} content={content} />
      </StyledFormModal>
    </MaskPage>
  );
}
FormModal.propTypes = {
  goal: PropTypes.string,
  content: PropTypes.object,
  handleCloseModal: PropTypes.func,
};
