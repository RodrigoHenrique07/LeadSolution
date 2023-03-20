import styled from 'styled-components';

export const InputCustom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  > label {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 160%;
    color: #4a4a4a;
  }

  > input {
    border-bottom: 0.1rem solid #9f9f9f;
    width: 100%;
    max-width: 58.3rem;
    margin-bottom: 1.4rem;
    background-color: transparent;
  }

`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 3rem;
  line-height: 126.9%;
  letter-spacing: 0.02em;
  color: #4a4a4a;
  margin-bottom: 3rem;


`;

export const SelectCustom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  > label {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 160%;
    color: #4a4a4a;
  }

  > select {
    border-bottom: 0.1rem solid #9f9f9f;
    width: 100%;
    max-width: 58.3rem;
    margin-bottom: 1.4rem;
    outline: none;
    background-color: transparent;
  }
`;

export const TextAreaCustom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  > label {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 160%;
    color: ${({theme}) => theme.GRAY};
  }

  > textarea {
    width: 58.1rem;
    height: 15.6rem;
    border: 0.1rem solid #9f9f9f;
    border-radius: 0.4rem;
    resize: none;
    margin-bottom: 0.6rem;
    background-color: transparent;
  }
  @media (max-width: 1800px) {
    >textarea{

      max-width: 450px;
    }
  }
`;

export const CheckCustom = styled.div`
  display: flex;
  gap: 1.2rem;
  text-align: center;
  align-items: center;
  margin-bottom: 2rem;

  > label {
    font-size: 1.5rem;
    line-height: 160%;
    color: ${({theme}) => theme.GRAY};
    line-height: 160%;
  }
`;

export const ButtonCustom = styled.button`
 background: #4b79c9;
  backdrop-filter: blur(4rem);
  border-radius: 0.4rem;

  width: 21.76rem;
  height: 5.1rem;

  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #FFFFFF;

  &[disabled] {
    background-color: #ced4da;
    color: #6c757d;
    cursor: not-allowed;
    opacity: 0.7; // cor mais fraca
  }
`;
