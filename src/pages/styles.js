import RocketImg from '../assets/intro.svg';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.WHITE};

  section {
    background: url(${RocketImg}) no-repeat center center;
    background-size: cover;
  }
`;

export const Section = styled.section`
  width: 100%;
`;