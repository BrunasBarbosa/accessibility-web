import { Menu } from '../../assets/icons/menu';
import { Logo } from '../Logo';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Logo />
      <Menu />
    </Container>
  );
}