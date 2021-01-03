import styled from "styled-components";
import { Page, PageContainer } from "./Page";
import { CloseButton, Button } from "./Button";
import { IconInput, IconSelectInput } from "./Input";
import { SmallText, Title } from "./Text";
import PropTypes from "prop-types";

const Mask = styled(Page)`
  background: ${({ theme }) => theme.color.mask};
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 2;
`;
const ModalContainer = styled(PageContainer)`
  width: 600px;
  position: relative;
  margin: auto 0;
`;

const TextModalContainer = styled(ModalContainer)`
  padding: ${({ theme }) => theme.space.lg + 20}px
    ${({ theme }) => theme.space.lg}px ${({ theme }) => theme.space.xl}px;
  & p {
    text-align: center;
  }
`;
export function TextModal({ content, handleCloseModal }) {
  return (
    <Mask>
      <TextModalContainer>
        <CloseButton handleCloseModal={handleCloseModal} />
        {content.texts.map((text) => (
          <SmallText>{text}</SmallText>
        ))}
      </TextModalContainer>
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

const FormModalContainer = styled(ModalContainer)`
  padding: ${({ theme }) => theme.space.lg}px;
  & > *:nth-child(2) ~ * {
    margin-top: ${({ theme }) => theme.space.md}px;
  }
`;
export function FormModal({ content, handleCloseModal, handleSubmit }) {
  const failed = true;
  return (
    <Mask>
      <FormModalContainer>
        <CloseButton handleCloseModal={handleCloseModal} />
        <Title>{content.title}</Title>
        <SmallText>{content.description}</SmallText>
        <SmallText>{content.components.select}</SmallText>
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
        <Button value={content.success} onClick={handleSubmit}>
          {content.submit}
        </Button>
      </FormModalContainer>
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
