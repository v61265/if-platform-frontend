import styled from "styled-components";
import { Page, PageContainer } from "./Page";
import { CloseButton } from "./Button";
import { Ps } from "./Text";
import PropTypes from "prop-types";
import { IconForm } from "./Form";

const Mask = styled(Page)`
  background: ${({ theme }) => theme.color.mask};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 6;
`;
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
    <Mask>
      <StyledTextModal>
        <CloseButton handleCloseModal={handleCloseModal} />
        {content.map((text) => (
          <Ps>{text}</Ps>
        ))}
      </StyledTextModal>
    </Mask>
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
    <Mask>
      <StyledFormModal>
        <CloseButton handleCloseModal={handleCloseModal} />
        <IconForm goal={goal} content={content} />
      </StyledFormModal>
    </Mask>
  );
}
FormModal.propTypes = {
  goal: PropTypes.string,
  content: PropTypes.object,
  handleCloseModal: PropTypes.func,
};
