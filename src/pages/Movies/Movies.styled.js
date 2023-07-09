import { styled } from 'styled-components';

export const FormStyled = styled.form`
  margin: 15px;
`;

export const Input = styled.input`
  margin-right: 5px;
`;

export const Button = styled.button`
  padding: 3px 20px;
  border: none;
  &:hover {
    cursor: pointer;
    transition-duration: 0.4s;
  }
`;
