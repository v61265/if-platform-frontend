import styled from "styled-components";
import { Page, PageContainer } from "./Page";
import { CloseButton, Button } from "./Button";
import { IconInput, IconSelectInput } from "./Input";
import { H4, Ps, Pxxs } from "./Text";
import PropTypes from "prop-types";

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
        {content.texts.map((text) => (
          <Ps>{text}</Ps>
        ))}
      </StyledTextModal>
    </Mask>
  );
}
TextModal.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    texts: PropTypes.arrayOf(PropTypes.string),
  }),
  handleCloseModal: PropTypes.func,
};

const StyledFormModal = styled(StyledModal)`
  padding: ${({ theme }) => theme.space.lg}px;
  & > *:nth-child(2) ~ * {
    margin-top: ${({ theme }) => theme.space.md}px;
  }
`;
export function FormModal({ content, handleCloseModal, handleSubmit }) {
  const failed = true;
  return (
    <Mask>
      <StyledFormModal>
        <CloseButton handleCloseModal={handleCloseModal} />
        <H4>{content.title}</H4>
        <Pxxs>{content.description}</Pxxs>
        {content.components.map((component) =>
          component.type === "inputGroup" ? (
            <IconSelectInput
              key={component.select.name}
              select={component.select}
              input={component.input}
              alert={failed ? component.alert : ""}
            />
          ) : (
            <IconInput
              key={component.name}
              type={component.type}
              name={component.name}
              placeholder={component.placeholder}
              icon={component.icon}
              alert={failed ? component.alert : ""}
            />
          )
        )}
        <Button
          value={content.success}
          handleOnClick={handleSubmit}
          text={content.submit}
        />
      </StyledFormModal>
    </Mask>
  );
}
FormModal.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    components: PropTypes.arrayOf(PropTypes.object),
    submit: PropTypes.string,
    success: PropTypes.string,
  }),
  handleCloseModal: PropTypes.func,
  handleSubmit: PropTypes.func,
};
