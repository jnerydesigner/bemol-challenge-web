import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 50px;
  width: 300px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  background: #0c92d4;
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  &:hover {
    background: ${shade(0.2, '#0c92d4')};
  }
`;
