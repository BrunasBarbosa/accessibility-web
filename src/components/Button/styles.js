import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 1.2rem;

  background: ${({ theme }) => theme.COLORS.SALMON};
  border: none;
  border-radius: .8rem;

  font-size: 2.4rem;
  font-family: var(--font-main);
  color: ${({ theme }) => theme.COLORS.WHITE};
`;