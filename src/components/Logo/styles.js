import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  font-family: var(--font-roboto-slab);
  gap: 1.2rem;
  text-align: center;
  align-items: center;
  line-height: 2.4rem;
  
  span {
    width: 4.4rem;
    height: 4.4rem;
    font-size: 4.4rem;
    line-height: 3.2rem;
    font-weight: bold;
    background: ${({ theme }) => theme.COLORS.SALMON};
    border-radius: 50%;
    color: ${({ theme }) => theme.COLORS.DARK};
  }
  
  h2 {
    font-size: 3.4rem;
  }
`;