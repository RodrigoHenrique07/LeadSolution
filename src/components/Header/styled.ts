import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: transparent;
  width: 100%;
  height: 3.9rem;

`;

export const LogoLS = styled.button`
  background-color: transparent;


  @media (max-width: 1500px){
    width: 18.18rem;
    height: 3.26rem;
  }
  @media (max-width: 1280px){
    width: 14.18rem;
    height: 3.26rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  margin-top: 9px;
  gap: 6rem;

  >li {

    a{
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 126.9%;
      color: ${({theme}) => theme.BLACK};
      transition: color .3s;

      &:hover{
        color: ${({theme}) => theme.GRAY};
      }

    }
  }

  @media (max-width: 1500px){
    gap: 2.5rem;
  }
  @media (max-width: 1280px){
    gap: 1.2rem;
    >li{
      a{
        font-size: 1.6rem;
      }

    }
  }
`;
