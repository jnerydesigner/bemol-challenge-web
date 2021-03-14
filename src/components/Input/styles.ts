import styled from 'styled-components';

export const Container = styled.div`
  height: 30px;
  width: 300px;
  border: 0;
  border-radius: 5px;
  margin-bottom: 10px;
  background: #c8d6e5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > div {
    margin-bottom: 10px;
  }
  svg {
    color: #48dbfb;
  }

  input {
    color: #000;
    background: #c8d6e5;
    border: 0;
    height: 30px;
    width: 250px;
    padding: 2px 10px;

    :active {
      border: 1px solid #000;
    }
  }
`;
