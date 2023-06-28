import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  font-family: var(--font-roboto-slab);
  gap: .8rem;
  text-align: center;
  line-height: 2.4rem;

  span {
    width: 3rem;
    height: 3rem;
    font-size: 3rem;
    font-weight: bold;
    background: ${({ theme }) => theme.COLORS.SALMON};
    border-radius: 50%;
    color: ${({ theme }) => theme.COLORS.DARK};
  }

  h2 {
    font-size: 2.4rem;
  }
`;