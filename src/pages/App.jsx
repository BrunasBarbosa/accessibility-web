import { Header } from '../components/Header';
import { Container, Section } from './styles';

export function App() {
  return (
    <Container>
      <Section >
        <Header />
        <div>
          <h1>Aplicativos projetados para micro e pequenas empresas</h1>
        </div>
      </Section>
    </Container>
  );
}