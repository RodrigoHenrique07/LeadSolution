
import { Container, Menu, LogoLS } from './styled';
import logoLs from '../../assets/logoLS.png';



export function Header(){
  return (
    <Container>
      <LogoLS>
        <img src={logoLs} alt="" />
      </LogoLS>
      <Menu>
        <li><a href='#home'>Home</a></li>
        <li><a href='#comofunciona'>Como funciona?</a></li>
        <li><a href='#produtos'>Produtos</a></li>
        <li><a href='#depoimentos'>Depoimentos</a></li>
        <li><a href='#contato'>Contato</a></li>
      </Menu>
    </Container>
  );
}
