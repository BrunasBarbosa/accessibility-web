import { Dollar } from '../assets/icons/dollar';
import { Potion } from '../assets/icons/potion';
import { Timer } from '../assets/icons/timer';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Container, Section } from './styles';

export function App() {
  return (
    <Container>
      <Section className='intro'>
        <Header />
        <div>
          <h1>Aplicativos projetados <br />para micro e pequenas empresas</h1>
          <p>
            A Apeperia é uma start-up com um jeito inovador de comprar e montar aplicativos mobile e web. 
            Funciona dessa forma: você contrata um dos nossos três excelentes planos e nós criamos, desenvolvemos e 
            publicamos seu app multiplataforma de forma acelerada e o melhor: se o app não atender às suas 
            necessidades, devolvemos seu dinheiro.
          </p>
        </div>

        <Button title='Conheça nossos planos'/>
      </Section>

      <Section className='benefits'>
        <div>
          <Timer />
          <p>
            Trabalhamos em ritmo acelerado, atendendo rigorosamente os prazos.
          </p>
        </div>

        <div>
          <Dollar />
          <p>
            Focado no pequeno e médio empreendedor, oferecemos serviços de qualidade com preços acessíveis.
          </p>
        </div>

        <div>
          <Potion />
          <p>
            Equipe especializada, com experiência de mercado. Testamos todos os produtos antes do lançamento.
          </p>
        </div>
      </Section>
    </Container>
  );
}