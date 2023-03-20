import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  padding: 6.6rem 15rem 9rem 15rem;
  background-color: ${({ theme }) => theme.WHITE_100};

  @media (max-width: 1800px){
    padding: 6.6rem 9rem 9rem 9rem;
  }
`;

export const HomeForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12.5rem;
  gap: 5rem;

  .left {
    max-width: 74.4rem;

    > h2 {
      font-weight: 800;
      font-size: 55px;
      height: 13.8rem;
      line-height: 126.9%;
      color: ${({ theme }) => theme.BLUE};
      margin-bottom: 5rem;

    }
  }

  @media (max-width: 1800px) {
    margin-top: 8rem;

    .left {
      max-width: 600px;
      h2 {
        font-size: 50px;
        height: 8.8rem;
      }
    }

  }
`;

export const ContextContainer = styled.div`
  width: 100%;
  padding: 6.6rem 15rem 9rem 15rem;

  @media (max-width: 1800px){
    padding: 6.6rem 9rem 9rem 9rem;
  }
`;

export const ClientContext = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    color: ${({theme}) => theme.GRAY};
    letter-spacing: 0.02em;
    position: relative;

    &:after{
      content: "";
      width: 7rem;
      top: -20px;
      left: 0;
      height: 6px;
      border-radius: 5px;
      background-color: ${({theme}) => theme.YELLOW};
      position: absolute;

    }
  }

  @media (max-width: 1800px) {
    >p{
      font-size: 38px;
    }
  }
`;

export const ComoFunciona = styled.div`
  margin-top: 203px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  > h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 147.4%;
    letter-spacing: 0.02em;
    color: #4a4a4a;
    margin-bottom: 96px;
  }

  @media (max-width: 1800px) {
    margin-top: 180px;
    >h2{
    font-size: 4rem;
    margin-bottom: 8rem;
   }
  }
`;

export const ContextCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11rem;

  > div {
    button {
      margin-top: 28px;
    }
  }

  @media (max-width: 1800px){
    gap: 8rem;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 163px;
  margin-top: 14rem;

  > div {
    img {
      width: 678px;
      height: 678px;
    }
  }

  @media (max-width: 1800px){
    >div{
      img{
        width: 478px;
        height: 478px;
      }
    }
  }
`;

export const Marketing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 152px;

  > h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 147.4%;
    letter-spacing: 0.02em;
    color: ${({theme}) => theme.GRAY};
    margin-bottom: 96px;
  }

  > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 100px;
  }

  @media (max-width: 1800px) {

    h2{
      font-size: 4rem;
      margin-bottom: 8.8rem;
    }

    >div{
      gap: 80px;
    }
  }
`;

export const Performance = styled.div`
  width: 100%;
  padding: 9.6rem 15rem 9rem 15rem;
  background: #fafaff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 553px;
    height: 496px;
  }

  >div{

    >h2 {
      &:after {
        top: 11rem;
      }
  }
  }

  @media (max-width: 1800px){
    padding: 9.6rem 9rem 9rem 9rem;
    >img{
      width: 503px;
      height: 446px;
    }



  }
`;

export const Plataforma = styled.div`
  width: 100%;
  padding: 6.6rem 15rem 9rem 15rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12.6rem;

  > h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 147.4%;
    letter-spacing: 0.02em;
    color: #4a4a4a;
    margin-bottom: 96px;
  }

  > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
  }

  @media (max-width: 1800px) {
    padding: 6.6rem 9rem 9rem 9rem;
    >h2{
      font-size: 40px;
    }

    div{
      gap: 45px;
    }
  }
`;


export const Interacao = styled.div`
  width: 100%;
  padding: 6.6rem 15rem 9rem 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 147.4%;
    letter-spacing: 0.02em;
    color: #4a4a4a;
    margin-bottom: 96px;
  }

  @media (max-width: 1800px) {
    padding: 6.6rem 9rem 9rem 9rem;
    >h2{
      font-size: 40px;
    }
  }
`;

export const Notificacoes = styled.div`
  width: 100%;
  padding: 6.6rem 15rem 9rem 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1800px) {
    padding: 6.6rem 9rem 9rem 9rem;

    img{
      width: 500px;
      height: 477px;

    }
  }
`;

export const Depoimentos = styled.div`
  width: 100%;
  padding: 6.6rem 15rem 9rem 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;


  h2{

      font-weight: 700;
      font-size: 48px;
      line-height: 147.4%;
      text-align: center;
      letter-spacing: 0.02em;
      margin-bottom: 134px;
    }

    > button {
      background-color: transparent;
    }



  `;

export const Newsletter = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.WHITE_100};
  padding: 11rem 9rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2{
    font-weight: 700;
    font-size: 40px;
    line-height: 147.4%;
    text-align: center;
    letter-spacing: 0.02em;

  }

  p{
    font-weight: 300;
    font-size: 36px;
    line-height: 147.4%;
    text-align: center;
    letter-spacing: 0.02em;
    margin-bottom: 9rem;
  }


`;

export const Input = styled.div`



  border-radius: 20px;
  background: #FFFFFF;
  box-shadow: 0px 10px 20px rgba(54, 58, 120, 0.1);
  height: 73.49px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 10px;

  >div{
    display: flex;
    gap: 2.2rem;

    >input{

      width: 400px;
    }

  }



  >button{
    border-radius: 10px;
    display: flex;
    padding: 1.6rem 1.9rem;
    gap: 1rem;
    background-color: ${({theme}) => theme.YELLOW};
    color: ${({theme}) => theme.BLACK};
    font-weight: 600;
    font-size: 20px;
    line-height: 126.9%;
  }

`;


