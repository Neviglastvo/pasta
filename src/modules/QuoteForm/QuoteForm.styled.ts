import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: ${({ theme }) => theme.text};
`;

export const Label = styled.form`
  display: flex;
  color: ${({ theme }) => theme.text};
`;
