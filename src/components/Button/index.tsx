import { ButtonContainer } from './styled';

interface PropsButton {
  title: string
}
export function Button({ title }: PropsButton) {
  return (
    <>
      <a href="#home">
        <ButtonContainer type="button">{title}</ButtonContainer>
      </a>
    </>
  );
}
