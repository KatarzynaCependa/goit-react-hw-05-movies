import { styled } from 'styled-components';

export const Button = styled.button`
  margin: 15px;
  padding: 3px 20px;
  border: none;
  &:hover {
    cursor: pointer;
    transition-duration: 0.4s;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const MovieImage = styled.div`
  margin-left: 15px;
  padding-right: 20px;
`;

export const Paragraph = styled.p`
  margin-left: 15px;
`;
