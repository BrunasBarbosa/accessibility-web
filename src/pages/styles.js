import RocketImg from '../assets/intro.svg';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.WHITE};

  .intro {
    background: url(${RocketImg}) no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    padding-bottom: 8.6rem;

    > div {
      margin: 0 auto;
      padding: 2.4rem;
      display: flex;
      flex-direction: column;
      max-width: 84.2rem;
      border-radius: .8rem;
      gap: 3.6rem;
      background: linear-gradient(180deg, rgba(26,26,26,0.0302474826472387462) 0%, rgba(26,26,26,0.6987570028011204) 75%);
    }

    > button {
      max-width: 32.8rem;
    }

    h1 {
      font-family: var(--font-roboto-slab);
      font-weight: lighter;
      font-size: 4.8rem;
      text-align: center;
    }
  
    p {
      word-spacing: 5px;
      font-size: 2.4rem;
      text-align: justify;
    }
  }

  .benefits {
    padding: 2.8rem 6.2rem;
    display: flex;
    justify-content: space-between;
    gap: 3.2rem;

    > div {
      max-width: 35.8rem;
      display: flex;
      gap: 2.4rem;
    }

    p {
      max-width: 26.2rem;
      color: ${({ theme }) => theme.COLORS.DARK};
      font-size: clamp(1.6rem,.8rem + 5vw , 2rem);
      font-weight: lighter;
      text-align: justify;
    }
  }

`;

export const Section = styled.section`
  width: 100%;
`;